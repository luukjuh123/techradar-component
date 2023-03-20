import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TechRadar from './components/TechRadar';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(React.createElement(React.StrictMode, null,
    React.createElement(TechRadar, { quadrants: [] })), document.getElementById('root'));
reportWebVitals();
