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
  const offset = 25;
  const placeholders = []
  for (let i=0; i < offset; i++) {
    placeholders.push("");
  }
  console.log("gifs", gifs);
  
  useEffect(() => {
    dispatch(fetchGifsActionCreator())
    console.log("dispatch")
  }, []);

  return (
    <div className="app">
      <header className="search">
        <input type="search" placeholder="Search for gifs" onChange={(e)=>{ setQuery(e.target.value) }} />
        <button onClick={()=>{ dispatch(fetchGifsActionCreator(query)) }}><img src={searchIcon} alt="search icon" /></button>
      </header>
      <div className="container">
        {
          (!gifs.isFetching) ? gifs.data.map((gif: any, i:number)=>
            <div className="item">
              <img key={i} src={ supportsWebP ? gif.images.preview_webp.url : gif.images.preview_gif.url } alt={gif.title} />
            </div>
          ) : placeholders.map((item, i)=><div key={i} className="item"><div className="placeholder"></div></div>)
        }
      </div>
    </div>
  );
}

export default Search;
