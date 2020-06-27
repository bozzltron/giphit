import React from 'react';
import './App.css';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux'
import { showOriginal } from './redux/ui/actions'
import closeIcon from './close.svg';

type GifProps = {
  id: string,
  title: string,
  preview: string,
  original: string,
  showOriginalId: string
}

Modal.setAppElement('#root')

function Gif({id, preview, original, title, showOriginalId}: GifProps) {
  const dispatch = useDispatch();

  return (
    <div className="item" onClick={()=>{ dispatch(showOriginal(id)); }}>
      <img src={preview} alt={title} />
      <Modal isOpen={id === showOriginalId}>
        <img src={original} alt={title} /> <br />
        <button onClick={(e)=>{ e.stopPropagation(); dispatch(showOriginal("")); }}>
          <img className="closeIcon" src={closeIcon} alt="close" />
        </button>
      </Modal>
    </div> 
  );
}

export default Gif;
