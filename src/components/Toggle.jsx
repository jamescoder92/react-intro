import { useState } from 'react';

function Toggle(){
  const [isOn, setIsOn] = useState(true);

  const toggleStyle = {
    backgroundColor: isOn ? '#2ecc71' : '#e74c3c',
    color: 'white',
    transition: '0.8s',
    borderRadius: '20px',
  };

  return (
    <div style={{backgroundColor: 'white',padding: '30px', margin: '10px', borderRadius: '50px', marginBottom: '20px'}}>
      <h3>2. Toggle Button</h3> 
      <div style={toggleStyle}>
        The Switch is {isOn ? "ON" : "OFF"}
      </div>
      <button onClick={() => setIsOn(!isOn)} style={{border: '0px', marginTop: '10px', cursor: 'pointer', backgroundColor: !isOn ? '#2ecc71' : '#e74c3c', transition: '0.5s'}}>
        Flip Switch
      </button>
    </div>
  );
};

export default Toggle;