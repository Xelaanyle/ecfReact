import React, { useState } from 'react';
import List from './components/List';
import Button from './components/Button';
import Title from './components/Title';

function App() {
  const [items, setItems] = useState(['Foo', 'Bar', 'Baz']);

  const addItem = () => {
    const newItem = prompt('Entrez un nouvel élément :');
    if (newItem) {
      setItems([...items, newItem]);
    }
  };

  return (
    <div>
      <Title text="Ma Liste Dynamique" />
      <Button onClick={addItem} label="Ajouter un élément" />
      <List items={items} />
    </div>
  );
}

export default App;
