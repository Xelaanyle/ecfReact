
function ChildComponent({ handleClick }) {
  const handleButtonClick = () => {
    handleClick(); 
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Cliquez-moi</button>
    </div>
  );
}

export default ChildComponent;
