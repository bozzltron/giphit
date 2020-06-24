import React, { useState, useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { fetchGifsActionCreator } from './redux/actions'
import { RootState } from './redux/reducer'
import useWebP from './useWebp'
import searchIcon from './search-icon.svg';

function Search() {
  const supportsWebP = useWebP();
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const gifs = useSelector((state: RootState) => state.gifs)
  const offsetAmount = 25;
  const placeholders = []
  for (let i=0; i < offsetAmount; i++) {
    placeholders.push("");
  }
  console.log("gifs", gifs);

  useEffect(() => {
    // Load trending gifs initially
    dispatch(fetchGifsActionCreator())
  },[]);

  useEffect(() => {
    // Listen for scroll bottom to add more content
    let loadMoreGifs = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !gifs.isFetching) {
        dispatch(fetchGifsActionCreator(query, gifs.data.length));
      }
    }
    window.addEventListener('scroll', loadMoreGifs);
    return () => {
      window.removeEventListener('scroll', loadMoreGifs);
    }
  },[gifs]);

  return (
    <div className="app">
      <header className="search">
        <input type="search" placeholder="Search for gifs" onChange={(e)=>{ setQuery(e.target.value) }} />
        <button onClick={()=>{ dispatch(fetchGifsActionCreator(query, 0)) }}><img src={searchIcon} alt="search icon" /></button>
      </header>
      <div className="container">
        {
          (gifs.data.length) ? gifs.data.map((gif: any, i:number)=>
            <div key={i} className="item">
              <img src={ supportsWebP ? gif.images.preview_webp.url : gif.images.preview_gif.url } alt={gif.title} />
            </div> 
          ) : null
        }
        {
          (gifs.isFetching) ? placeholders.map((item, i)=><div key={i} className="item"><div className="placeholder"></div></div>) : null
        }
      </div>
    </div>
  );
}

export default Search;
