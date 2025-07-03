// components/Base64Image.js
import React from 'react';

const Base64Image = ({ base64String, altText, ...rest }) => {
  return (
    <img src={`data:image/jpeg;base64,${base64String}`} alt={altText} {...rest}/>
  );
};

export default Base64Image;
