import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Modal from 'react-modal'
// Modal.setAppElement('#root')// we can either set the modal to the root in the index.js or the component you are planning on using the modal you just have to ,make sure you set the app element to the root somewhere in the app. 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
