import React from 'react';
import './Display.css';

const CalcLayout = () => {
    return (
        <div className="container">
            <div className="span-row"></div>
            <button className="span-3-of-4">Clear</button>
            <button className="span-1-of-4 red">%</button>
            <button className="span-1-of-4">1</button>
            <button className="span-1-of-4">2</button>
            <button className="span-1-of-4">3</button>
            <button className="span-1-of-4 red">x</button>
            <button className="span-1-of-4">4</button>
            <button className="span-1-of-4">5</button>
            <button className="span-1-of-4">6</button>
            <button className="span-1-of-4 red">-</button>
            <button className="span-1-of-4">7</button>
            <button className="span-1-of-4">8</button>
            <button className="span-1-of-4">9</button>
            <button className="span-1-of-4 red">+</button>
            <button className="span-3-of-4">0</button>
            <button className="span-1-of-4 red">=</button>
        </div>
    );
};

export default CalcLayout;