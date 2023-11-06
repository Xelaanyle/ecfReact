import React, { useState } from 'react';
import Form from './components/Form';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    <div>
      <h1>Exercice 6</h1>
      <Form onInputChange={handleInputChange} />
      <p>Vous avez saisi : {inputValue}</p>
    </div>
  );
}

export default App;