import React, { useState } from 'react';
import WordTable from './WordTable';

const TextArea = () => {
 const [encodedDecodedText, setEncodedDecodedText] = useState('');
 const [text, setText] = useState('');
 const [isEncoder, setIsEncoder] = useState(true);
 const [count, setCount] = useState(0);

 const [wordList, setWordList] = useState([]);


function encoder(text){
    let result = "";
  for (let i = 0; i < text.length; i++) {
    let ascii = text.charCodeAt(i);
    if (ascii >= 32) {
        ascii += 3;
        result += String.fromCharCode(ascii);
    } 
    else 
        result += text.charAt(i);
  }
  return result;
}
function decoder(text){
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let ascii = text.charCodeAt(i);
    if (ascii >= 35) {
      ascii -= 3;
      result += String.fromCharCode(ascii);
    } 
    else 
      result += text.charAt(i);
  }
  return result;
}

 const handleChange = (e) => {
    const content = e.target.value;
    const words = e.target.value.split(' ');

    const list = [...new Set(words)].filter(word => word);
    setWordList(list);
    setCount(text.length);
    setText(content);
    if(isEncoder) setEncodedDecodedText(encoder(content));
    else setEncodedDecodedText(decoder(content));
 };

 const handleSwitchMode = () => {
    setIsEncoder(!isEncoder);
    if (isEncoder)
    setText(encodedDecodedText);
    setEncodedDecodedText(text);
    setWordList([]);
 };

 return (
    <div className='container'> 
            <div class="container">
                    <div class="row"> 
                        <div class="col-5"> 
                          
                            <div class="form-outline">
                              {isEncoder ? (
                                  <p>Decoded</p>
                              ) : (
                                <p>Encoded</p>
                              )}  
                                <textarea onChange={handleChange} value={text} class="form-control" id="textAreaExample1" rows="5"></textarea>
                                <label class="form-label" for="textAreaExample">Text</label>
                            </div>
                        </div>
                        <div class="col-2 mx-auto ct"> 
                        <button type="button" className="btn btn-success" onClick={handleSwitchMode}>
                            Switch to {isEncoder ? 'Decoder' : 'Encoder'}
                        </button>
                        </div>
                        <div class="col-5"> 
                            <div class="form-outline">
                            {isEncoder ? (
                                  <p>Encoded</p>
                              ) : (
                                <p>Decoded</p>
                              )}  
                                <textarea class="form-control" id="textAreaExample1" rows="5"value={encodedDecodedText}></textarea>
                                <label class="form-label" for="textAreaExample">Text</label>
                            </div>
                        </div>
                    </div>
            </div>

                        <table class="table">
                            <caption>List of Words</caption>
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Characters Number</th>
                                <th scope="col">Words Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>{count}</td>
                                <td>{wordList.length}</td>
                                </tr>
                            </tbody>
                        </table>
      <WordTable words={wordList} />
    </div>
 );
};
export default TextArea;

