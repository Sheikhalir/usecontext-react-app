import React, { useState } from 'react';
import './App.css';
import Parent from './Parent.js';
import ValueContext from './ValueContext';
import Child2 from './Child2.js';
function App() {

 /// let [number, setnumber] = useState(24);
 let value = 30;
  return (
    <ValueContext.Provider value ={value} >
        <div>
          <p>Hello World from App Component</p>
          <Parent></Parent>
          <Child2></Child2>
        </div>
    </ValueContext.Provider>
  );
}

export default App;
