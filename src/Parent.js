import React from 'react';

import Child from './Child.js';

function Parent(props) {
  return (
    <div>
      <Child num= {props.num}></Child>

    </div>
  );
}

export default Parent;
