import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RootComponent } from './app/root/Root';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom'

ReactDOM.render(<HashRouter><RootComponent/></HashRouter>, document.getElementById('root'));
registerServiceWorker();
