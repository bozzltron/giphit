
import { useState, useEffect } from 'react'

export default function useWebP(){
  const [supportsWebP, setSupportsWebP] = useState(false);

  function canUseWebP() {
    var elem = document.createElement('canvas');

    if (!!(elem.getContext && typeof(elem.getContext) === 'function' && elem.getContext('2d'))) {
        // was able or not to get WebP representation
        return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }

    // very old browser like IE 8, canvas not supported
    return false;
  }

  useEffect(()=>{
    setSupportsWebP(canUseWebP());
  }, []);

  return supportsWebP;
}