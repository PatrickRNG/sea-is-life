import React from 'react';
import './style.scss';

function Button({text, type, onClick}) {
  const isFileType = type === 'file';
  return (
    isFileType ? (
      <div className="inputFile">
        <label htmlFor="inputFile">{text}</label>
        <input id="inputFile" type={type} />
      </div>
    ) : 
    type ? (
      <button type={type} className="button" onClick={onClick} value>{text}</button>
    ) : (
    <div className="button" onClick={onClick}>
      {text}
    </div> 
    )
  );
}

export default Button;