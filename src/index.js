import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Blog from './containers/Blog/Blog';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Blog />, document.getElementById('root'));
registerServiceWorker();
