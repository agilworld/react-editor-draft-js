import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const run = () => {
  ReactDOM.render(<App/>, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', run);