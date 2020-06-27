import React, { useState, useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { getGifs } from './redux/gifs/actions'
import { RootState } from './redux/reducer'
import useWebP from './useWebp'
import searchIcon from './search-icon.svg';
import Gif from './Gif'

function Search() {
  const supportsWebP = useWebP();
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const gifs = useSelector((state: RootState) => state.gifs)
  const ui = useSelector((state: RootState) => state.ui)
  const placeholders = [];
  for(let i=0; i<25; i++){
    placeholders.push("");
  }

  useEffect(() => {
    // Load trending gifs initially
    dispatch(getGifs('', 0))
  },[]);

  useEffect(() => {
    // Listen for scroll bottom to add more content
    let loadMoreGifs = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        dispatch(getGifs(query, gifs.data.length));
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
        <button onClick={()=>{ dispatch(getGifs(query, 0)) }}><img src={searchIcon} alt="search icon" /></button>
      </header>
      <div className="container">
        {
          (gifs.data.length) ? gifs.data.map((gif: any, i:number)=>
            <Gif key={i} 
              id={gif.id}
              showOriginalId={ui.showOriginalId}
              preview={supportsWebP ? gif.images.preview_webp.url : gif.images.preview_gif.url} 
              original={supportsWebP ? gif.images.original.webp :  gif.images.original.url } 
              title={gif.title}  />
          ) : null
        }
        {
          gifs.isFetching || gifs.data.length === 0 ? placeholders.map((item, i)=><div key={i} className="item"><div className="placeholder"></div></div>) : null
        }
      </div>
    </div>
  );
}

export default Search;
