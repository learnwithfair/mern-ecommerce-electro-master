import React, { useEffect } from 'react'

export default function ReloadJS(props) {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = props.src;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []); // router prop or w/e
  
}
