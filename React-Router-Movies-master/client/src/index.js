import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Coffee} from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
<Coffee>
    <App />
</Coffee>, document.getElementById('root'));

// I am importing BrowserRouter as Coffee to prove that Router can be anything, it is a banana word!