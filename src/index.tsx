import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faFile, faEnvelope, faGlobe} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faGithub, faFile, faEnvelope, faLinkedin, faGlobe)

ReactDOM.render(
    <React.StrictMode>
        <div className="flex-wrapper">
            <App/>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
