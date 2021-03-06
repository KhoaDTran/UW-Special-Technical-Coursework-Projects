import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import SAMPLE_DOGS from './dogs.json'; //a sample list of dogs (model)

import './style.css';

ReactDOM.render(<App pets={SAMPLE_DOGS} />, document.getElementById('root'));
