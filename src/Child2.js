import React, { useContext, useReducer } from 'react';
import numberReducer from './numberReducer.js';

function Child2() {
    let [state, dispatch] = useReducer(numberReducer, 50)

    return (
    <div>
      Child 2 {state}
         <button onClick = {()=> {dispatch ({type: "INCREMENT", val: 50});  }}>Increament</button>
         <button onClick = {()=> {dispatch ({type: "DECREMENT", val: 40});  }}>Decrement</button>
    </div>
  );
}

export default Child2;
