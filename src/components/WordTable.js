import React from 'react';

const WordTable = ({ words }) => {
 return (
    <div className="word-list">

      <br>  
      </br>
          <h2>List of Words</h2>
        <table class="table table-striped table-dark">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Word</th>
    </tr>
  </thead>
  <tbody>
    {words.map((word, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{word}</td>
        </tr>
    ))}
  </tbody>
</table>

    </div>
 );
};

export default WordTable;