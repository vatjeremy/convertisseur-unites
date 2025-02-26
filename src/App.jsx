import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0);
  const [unitFrom, setUnitFrom] = useState('meters');
  const [unitTo, setUnitTo] = useState('kilometers');
  const [result, setResult] = useState(0);

  // Fonction pour convertir les unités
  const convert = () => {
    let convertedValue = 0;

    // Logique de conversion entre les différentes unités
    if (unitFrom === 'meters') {
      if (unitTo === 'kilometers') convertedValue = value / 1000;
      else if (unitTo === 'centimeters') convertedValue = value * 100;
      else if (unitTo === 'millimeters') convertedValue = value * 1000;
      else if (unitTo === 'inches') convertedValue = value * 39.3701;
    } else if (unitFrom === 'kilometers') {
      if (unitTo === 'meters') convertedValue = value * 1000;
      else if (unitTo === 'centimeters') convertedValue = value * 100000;
      else if (unitTo === 'millimeters') convertedValue = value * 1000000;
      else if (unitTo === 'inches') convertedValue = value * 39370.1;
    } else if (unitFrom === 'centimeters') {
      if (unitTo === 'meters') convertedValue = value / 100;
      else if (unitTo === 'kilometers') convertedValue = value / 100000;
      else if (unitTo === 'millimeters') convertedValue = value * 10;
      else if (unitTo === 'inches') convertedValue = value / 2.54;
    } else if (unitFrom === 'millimeters') {
      if (unitTo === 'meters') convertedValue = value / 1000;
      else if (unitTo === 'kilometers') convertedValue = value / 1000000;
      else if (unitTo === 'centimeters') convertedValue = value / 10;
      else if (unitTo === 'inches') convertedValue = value / 25.4;
    } else if (unitFrom === 'inches') {
      if (unitTo === 'meters') convertedValue = value / 39.3701;
      else if (unitTo === 'kilometers') convertedValue = value / 39370.1;
      else if (unitTo === 'centimeters') convertedValue = value * 2.54;
      else if (unitTo === 'millimeters') convertedValue = value * 25.4;
    }

    setResult(convertedValue); // Met à jour le résultat de la conversion
  };

  return (
    <>
      <h1>Convertisseur d'unités</h1>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Entrez la valeur"
      />
      <select value={unitFrom} onChange={(e) => setUnitFrom(e.target.value)}>
        <option value="meters">Mètres</option>
        <option value="kilometers">Kilomètres</option>
        <option value="centimeters">Centimètres</option>
        <option value="millimeters">Millimètres</option>
        <option value="inches">Pouces</option>
      </select>
      <span> à </span>
      <select value={unitTo} onChange={(e) => setUnitTo(e.target.value)}>
        <option value="meters">Mètres</option>
        <option value="kilometers">Kilomètres</option>
        <option value="centimeters">Centimètres</option>
        <option value="millimeters">Millimètres</option>
        <option value="inches">Pouces</option>
      </select>
      <button onClick={convert}>Convertir</button>
      <h2>Résultat : {result}</h2>
    </>
  );
}

export default App;