import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faGithub, faFile, faEnvelope, faLinkedin)

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <div className="flex-wrapper">
              <App/>
          </div>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
