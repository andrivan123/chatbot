import React from 'react';

const blinkStyle = {
    animation: 'blinker 1s linear infinite'
  };
  
  const keyframes = `
  @keyframes blinker {
    50% { opacity: 0; }
  }
  `;

function Loading({onoff=0}) {
    if(!onoff)
        return <></>

  return (
<div style={{ textAlign: 'center', padding: '2rem' }}>
      {/* Inject keyframes into the document */}
      <style>{keyframes}</style>
      <span style={blinkStyle}>Loading...</span>
    </div>
  );
}

export default Loading;