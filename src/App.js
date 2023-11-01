import React, { useState } from 'react';

const Encoder = () => {
 const [encodedText, setEncodedText] = useState('');

 const handleChange = (e) => {
    let encodedText = '';

    for (let i = 0; i < e.target.value.length; i++) {
      let ascii = e.target.value.charCodeAt(i);

      if (ascii >= 32) {
        ascii += 3;
        encodedText += String.fromCharCode(ascii);
      } else {
        encodedText += e.target.value.charAt(i);
      }
    }

    setEncodedText(encodedText);
 };

 return (
    <div className='container'>
      <textarea onChange={handleChange} />
      <p>Encoded Text: {encodedText}</p>
    </div>
 );
};
