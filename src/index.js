import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import { Provider } from 'react-redux' 
import routes from "./routes"
import { BrowserRouter as Router } from "react-router-dom"

import NavigationBar from "./components/NavigationBar"

ReactDOM.render(
    <Provider store={store}>
      <Router routes={routes}>
        <NavigationBar />
        {routes}
      </Router>
    </Provider>,
  document.getElementById('root')
)
