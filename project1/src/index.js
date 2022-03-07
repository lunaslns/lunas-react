import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Footer from './Footer';
import MenuNgang from './MenuNgang';
import NoiDungChinh from './NoiDungChinh';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(<Header/>, document.querySelector('#header'));
ReactDOM.render(<Footer/>, document.querySelector('#footer'));
ReactDOM.render(<MenuNgang/>, document.querySelector('#menu'));
ReactDOM.render(<NoiDungChinh/>, document.querySelector('#root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
