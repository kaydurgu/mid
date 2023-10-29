import React, { useState } from 'react';
import Joke from './components/Joke';
function App() {
 const [text, setText] = useState('');
    function getAscii(str){
      return str.charCodeAt(0);
    }

 const handleChange = (e) => {
    
    let k = e.target.value;
    let newvalue = "";
    if (k === ""){
      setText("");
      return ;
    }
    for(let i = 0; i< k.length - 1 ; i++){
      newvalue = newvalue + k[i];
    }
    var str =String.fromCharCode(getAscii(k[k.length - 1]) + 3);
    console.log(str , newvalue);
    newvalue = newvalue + str;
    setText(newvalue);
 };

 return (
    <div className="App">
      <h1>{text}</h1>
      <textarea value={text} onChange={handleChange} />
      <h1>{text}</h1>
      <Joke/>
    </div>
 );
}

export default App;