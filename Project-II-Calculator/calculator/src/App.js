import React from 'react';
import './App.css';
import CalcLayout from './components/DisplayComponents/CalculatorDisplay';
// import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div>
      <CalcLayout />;
      {/* {<NumberButton /> } */}
    </div>
  );
};

export default App;
