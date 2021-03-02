import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faBars, faGraduationCap, faHandshake, faSuitcase, faAward, faCircle, faDotCircle, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Provider } from 'react-redux';
import store from './store/store';

library.add(fab, faCheckSquare, faBars, faGraduationCap, faHandshake, faSuitcase, faAward, faCircle, faDotCircle, faMoon, faSun)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
