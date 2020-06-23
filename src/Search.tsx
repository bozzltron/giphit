import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { fetchGifsActionCreator } from './redux/actions'
import { RootState } from './redux/reducer'

function Search() {
  const dispatch = useDispatch();
  const gifs = useSelector((state: RootState) => state.gifs)
  console.log("gifs", gifs);
  
  useEffect(() => {
    dispatch(fetchGifsActionCreator())
    console.log("dispatch")
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <input type="search" />
      </header>
      <div className="content">
        {
          (gifs && gifs.data && gifs.data.length > 0) ? gifs.data.map((gif: any, i:number)=>
            <video key={i} src={gif.images.preview.mp4} />
          ) : null
        }
      </div>
    </div>
  );
}

export default Search;
