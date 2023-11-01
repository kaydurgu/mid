import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {
 const [value, setValue] = useState('');

 const handleChange = (content, delta, source, editor) => {
    setValue(content);
 };

 return (
    <div>
      <ReactQuill value={value} onChange={handleChange} />
    </div>
 );
};

export default TextEditor;