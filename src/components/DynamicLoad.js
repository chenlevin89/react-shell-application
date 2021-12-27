import React, {useRef, useEffect} from 'react';

export default function DynamicLoad({path,element}) {

    const containerRef = useRef(null);
  
    useEffect(() => {
        mapping[path]().then(_ => {
        const elem = document.createElement(element);
        containerRef.current.appendChild(elem);
      })
    })
  
    return (
      <div style={{height:'100%'}} ref={containerRef} ></div>
    );
}

const mapping = {
    'vueRemote/ContactUs': () => import('vueRemote/ContactUs')
};

