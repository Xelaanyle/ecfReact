import React, { useState } from 'react';

function Form({ onInputChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onInputChange(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Saisissez votre texte"
      />
    </div>
  );
}

export default Form;
