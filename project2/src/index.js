import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hien1Tin from './Hien1Tin';

var tin1 = {id:124, tieude:"Ban than va nguoi quen", mota:"Co su khac nhau giua viec"};
var tin2 = {id:124, tieude:"Ban than va nguoi quen", mota:"Co su khac nhau giua viec"};
var tin3 = {id:124, tieude:"Ban than va nguoi quen", mota:"Co su khac nhau giua viec"};
var tin4 = {id:124, tieude:"Ban than va nguoi quen", mota:"Co su khac nhau giua viec"};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(<Hien1Tin tin={tin1}/>, document.querySelector('#col1'));
ReactDOM.render(<Hien1Tin tin={tin2}/>, document.querySelector('#col2'));
ReactDOM.render(<Hien1Tin tin={tin3}/>, document.querySelector('#col3'));
ReactDOM.render(<Hien1Tin tin={tin4}/>, document.querySelector('#col4'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
