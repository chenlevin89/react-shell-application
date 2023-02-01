import React, {useRef, useEffect} from 'react';

export default function DynamicLoad({dynamicImport, props}) {

  const containerRef = useRef(null);

  useEffect(() => {
    let unmount;

    dynamicImport().then(({default: createApp}) => {
      unmount = createApp(containerRef.current, props);
    })

    return () => unmount();
  }, [])

  return (
    <div style={{height: '100%'}} ref={containerRef} ></div>
  );
}


