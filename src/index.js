import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { BrowserRouter, Route, Link } from 'react-router-dom'

import 'bootstrap';

import './styles/app.scss'

ReactDOM.render(
    <BrowserRouter>
        <div>
          <Route path="/" component={App} />
          {/* add the routes here */}
        </div>
    </BrowserRouter>,
    document.getElementById('root')
  );
  