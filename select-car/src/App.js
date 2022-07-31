import './App.css';
import { useState } from 'react';

function App() {

  const [selectedCar, setSelectedcar] = useState('Mercedes')
  const [selectedColor, setSelectedColor] = useState('Black')

  const Selectedcar = (e) => {
    setSelectedcar(e.target.value)
  }

  const Selectedcolor = (e) => {
    setSelectedColor(e.target.value)
  }

  return (
    <div>
      <h2>Select your car</h2>
      <div>
        <span>Select a car: </span>
        <select onChange={(e)=>{Selectedcar(e)}}>
          <option value='Mercedes'>Mercedes</option>
          <option value='BMW'>BMW</option>
          <option value='Audi'>Audi</option>
          <option value='Porche'>Porche</option>
        </select>
      </div>
      <div>
        <span>Select color: </span>
        <select onChange={(e)=>{Selectedcolor(e)}}>
          <option value='Black'>Black</option>
          <option value='Red'>Red</option>
          <option value='Green'>Green</option>
          <option value='White'>White</option>
        </select>
      </div>
      <h2>You select a {selectedCar} - {selectedColor}</h2>
    </div>
  );
}

export default App;
