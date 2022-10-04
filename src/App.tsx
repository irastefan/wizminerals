import React, { useState } from 'react';
import { ColorBase, TypeBySkinTone } from './classes/ColorBase';

function App() {
  const [baseType, setBaseType] = useState(TypeBySkinTone.Neutral);
  const [baseSize, setBaseSize] = useState(10);

  const colorBaseNew = new ColorBase(baseType, baseSize);
  const base = colorBaseNew.calcBase();

  return (
    <div className="App">
      <input type="text" value={baseSize} 
        onChange={(event) => {
          if (parseInt(event.target.value) > 0) setBaseSize(parseInt(event.target.value)) 
            else setBaseSize(0)
        }} />

      <button onClick={() => setBaseType(TypeBySkinTone.Neutral)}>Neutral</button>
      <button onClick={() => setBaseType(TypeBySkinTone.Warm)}>Warm</button>
      <button onClick={() => setBaseType(TypeBySkinTone.Olive)}>Olive</button>
      <button onClick={() => setBaseType(TypeBySkinTone.Pink)}>Pink</button>
     

      { base.yellow > 0 && <p>Yellow: {base.yellow}</p> }
      { base.red > 0 && <p>Red: {base.red}</p> }
      { base.blue > 0 && <p>Blue: {base.blue}</p> }
      { base.black > 0 && <p>Black: {base.black}</p> }
    </div>
  );
}

export default App;
