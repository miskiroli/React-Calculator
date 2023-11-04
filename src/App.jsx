import { useState } from 'react'

import './App.css'
import CalculatorButtons from './CalculatorButtons';
import CalculatorDisplay from './CalculatorDisplay';

function App() {
  const [displayValue, setDisplayValue] = useState('0');

  const handleButtonPress = (buttonValue) => {
   
    if (displayValue === '0' && buttonValue !== 'C') {
      setDisplayValue(buttonValue);
    } else if (buttonValue === 'C') {
      setDisplayValue('0');
    } else if (buttonValue === '=') {
      try {
        setDisplayValue(eval(displayValue).toString());
      } catch (error) {
        setDisplayValue('Hiba');
      }
    } else {
      setDisplayValue(displayValue + buttonValue);
    }
  };

  return (
    <div className="calculator">
      <CalculatorDisplay calculatorValue={displayValue} />
      <CalculatorButtons buttonPress={handleButtonPress} />
    </div>
  );
}

export default App;
