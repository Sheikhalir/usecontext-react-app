import React, { useState } from 'react';
import './App.css';
import Parent from './Parent.js';
import ValueContext from './ValueContext';
function App() {

 /// let [number, setnumber] = useState(24);
 let value = 30;
  return (
    <ValueContext.Provider value ={value} >
        <div>
          <p>Hello World from App Component</p>
          <Parent></Parent>
        </div>
    </ValueContext.Provider>
  );
}

export default App;
