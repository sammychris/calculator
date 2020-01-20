import React from 'react';

const Display = (props) => {
  const { input, result } = props;
  return (
    <div id="output">
      <div id="input">{input}</div>
      <div id="display">{result}</div>
    </div>
  )
}

export default Display;