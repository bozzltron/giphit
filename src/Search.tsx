import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { getGifs } from './redux/gifs/actions'
import { setQuery, setOffset, setUseWebp } from './redux/ui/actions'
import { RootState } from './redux/reducer'
import canUseWebP from './canUseWebp'
import searchIcon from './search-icon.svg';
import Gif from './Gif'

function Search() {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.gifs.data);
  const isFetching = useSelector((state: RootState) => state.gifs.isFetching);
  const query = useSelector((state: RootState) => state.ui.query);
  const offset = useSelector((state: RootState) => state.ui.offset);
  const showOriginalId = useSelector((state: RootState) => state.ui.showOriginalId);
  const useWebp = useSelector((state: RootState) => state.ui.useWebp);
  const offsetAmount = 25;
  const placeholders = [];
  for(let i=0; i<offsetAmount; i++){
    placeholders.push("");
  }

  useEffect(() => {
    // Load trending gifs initially
    console.log('initial load of gifs')
    dispatch(getGifs(query, offset))
    dispatch(setUseWebp(canUseWebP()));
  },[]);

  useEffect(() => {
    // Listen for scroll bottom to add more content
    let loadMoreGifs = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !isFetching) {
        let newOffset = offset + offsetAmount;
        console.log("getting more gifs", "offset", offset, "newOffse", newOffset);
        dispatch(setOffset(newOffset))
        dispatch(getGifs(query, newOffset))
      }
    }
    window.addEventListener('scroll', loadMoreGifs);
    return () => {
      window.removeEventListener('scroll', loadMoreGifs);
    }
  },[dispatch, data, isFetching, offset, query]);

  return (
    <div className="app">
      <header className="search">
        <form onSubmit={(e)=>{ e.preventDefault(); dispatch(getGifs(query, 0)) }}>
          <input type="search" placeholder="Search for gifs" onChange={(e)=>{ dispatch(setQuery(e.target.value)) }} />
          <button><img src={searchIcon} alt="search icon" /></button>
        </form>
      </header>
      <div className="container">
        {
          (data.length) ? data.map((gif: any, i:number)=>
            <Gif key={i} 
              id={gif.id}
              showOriginalId={showOriginalId}
              preview={useWebp ? gif.images.preview_webp.url : gif.images.preview_gif.url} 
              original={useWebp ? gif.images.original.webp :  gif.images.original.url } 
              title={gif.title}  />
          ) : null
        }
        {
         isFetching || data.length === 0 ? placeholders.map((item, i)=><div key={i} className="item"><div className="placeholder"></div></div>) : null
        }
      </div>
    </div>
  );
}

export default Search;
