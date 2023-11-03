import React, { useState } from 'react';
import TextEditor from './TextEditor';
import WordTable from './WordTable';

const TextArea = () => {
 const [encodedText, setEncodedText] = useState('');
 const [decodedText, setDecodedText] = useState('');
 const [isEncoder, setIsEncoder] = useState(true);
 const [count, setCount] = useState(0);
 
 const [wordCount, setWordCount] = useState(0);
 const [wordList, setWordList] = useState([]);


 const handleChange = (e) => {
    let encodedDecodedText = '';
    const text = e.target.value;
    const words = e.target.value.split(' ');
    const count = words.length;
    const list = [...new Set(words)].filter(word => word);
    setWordCount(count);
    setWordList(list);
    setCount(text.length);
    for (let i = 0; i < e.target.value.length; i++) {
      let ascii = e.target.value.charCodeAt(i);

      if (isEncoder) {
        if (ascii >= 32) {
          ascii += 3;
          encodedDecodedText += String.fromCharCode(ascii);
        } else {
          encodedDecodedText += e.target.value.charAt(i);
        }
      } else {
        if (ascii >= 35) {
          ascii -= 3;
          encodedDecodedText += String.fromCharCode(ascii);
        } else {
          encodedDecodedText += e.target.value.charAt(i);
        }
      }
    }

    if (isEncoder) {
      setEncodedText(encodedDecodedText);
    } else {
      setDecodedText(encodedDecodedText);
    }
 };

 const handleSwitchMode = () => {
    setIsEncoder(!isEncoder);
    setWordCount(0);
    setCount(0);
    setWordList([]);
 };

 return (
    <div className='container'>     
    <div class="form-outline">
    <textarea onChange={handleChange} class="form-control" id="textAreaExample1" rows="4"></textarea>
    <label class="form-label" for="textAreaExample">Message</label>
  </div>
      {isEncoder ? (
        <p>Encoded Text: {encodedText}</p>
      ) : (
        <p>Decoded Text: {decodedText}</p>
      )}
      <button type="button" className="btn btn-success" onClick={handleSwitchMode}>
        Switch to {isEncoder ? 'Decoder' : 'Encoder'}
      </button>
      <WordTable words={wordList} />
      <p> Characters {count}</p>
      <p>Word Count: {wordCount}</p>
      <p>Word List: {wordList.join(', ')}</p>
      <TextEditor/>
    </div>
 );
};
export default TextArea;

