import React, { useState, useEffect } from 'react';
import './App.css';
import Modal from 'react-modal';

type GifProps = {
  title: string,
  preview: string,
  original: string
}

Modal.setAppElement('#root')

function Gif({preview, original, title}: GifProps) {
  let [showOriginal, setShowOriginal] = useState(false);
  let [showAnimation, setShowAnimation] = useState(false);

  useEffect(()=>{
    setShowAnimation(true);
  },[])

  function close(){
    console.log("close!")
    setShowOriginal(false);
  }

  return (
    <div className="item" onClick={()=>{ setShowOriginal(true) }}>
      <img src={preview} alt={title} className={showAnimation ? "zoomin": ""} />
      <Modal isOpen={showOriginal} onRequestClose={close}>
        <img src={original} alt={title} onClick={close} />
      </Modal>
    </div> 
  );
}

export default Gif;
