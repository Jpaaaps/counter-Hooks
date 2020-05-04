import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleChange = (event) => {
    setCount(Number(event.target.value))
  }

  return (
    <div>
      <label>Saisie un nombre</label>
      <input type="number" onChange={handleChange}></input>
      <p>Le compteur est  à : {count} </p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}

export default Counter;
