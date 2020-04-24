import React, { useState } from 'react';

function Counter() {
    
  const [ value, setValue] = useState();

function handleChange(event) {
    setValue(event.target.value);
}

  return (
    <div>
        <input value={value} onChange={handleChange}/>
        <p>Le compteur est  à : {value} </p>
        <button onClick={() => setValue(value + 1)}>
            +1
        </button>
        <button onClick={() => setValue(value - 1)}>
            -1
        </button>
    </div>
  );
}

export default Counter;