
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const handleClick = () => {
    console.log('Bouton cliqué !');
  };

  return (
    <div>
      <h2>Composant Parent</h2>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
}

export default ParentComponent;
