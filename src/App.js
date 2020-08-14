import React, { useState } from 'react';
import './App.css';
import Parent from './Parent.js';
function App() {

  let [number, setnumber] = useState(24);
  return (
    <div>
      <p>Hello World from App Component</p>
      <Parent num = {number}></Parent>
      <button onClick= { () => setnumber(++number)}>Update Number</button>
    </div>
  );
}

export default App;
