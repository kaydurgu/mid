import React, { useState } from 'react';
import TextEditor from './TextEditor';
import WordTable from './WordTable';

const TextArea = () => {
 const [encodedText, setEncodedText] = useState('');
 const [decodedText, setDecodedText] = useState('');
 const [isEncoder, setIsEncoder] = useState(true);
 const [count, setCount] = useState(0);

 const [wordList, setWordList] = useState([]);


 const handleChange = (e) => {
    let encodedDecodedText = '';
    const text = e.target.value;
    const words = e.target.value.split(' ');

    const list = [...new Set(words)].filter(word => word);
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
    setCount(0);
    setEncodedText("");
    setDecodedText("");
    setWordList([]);
 };

 return (
    <div className='container'> 
            <div class="container">
                    <div class="row"> 
                        <div class="col-5"> 
                            <div class="form-outline">
                                <textarea onChange={handleChange} value={decodedText} class="form-control" id="textAreaExample1" rows="5"></textarea>
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
                                <textarea class="form-control" id="textAreaExample1" rows="5"value={encodedText}></textarea>
                            ) : (
                                <textarea class="form-control" id="textAreaExample1" rows="5"value={decodedText}></textarea>
                            )}  
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
      <TextEditor/>
    </div>
 );
};
export default TextArea;

