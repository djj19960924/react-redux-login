import React, { Component } from 'react'
import { Link } from "react-router-dom" 

class NavigationBar extends Component {
  render() { 
    return ( 
      <div className="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <div className="container">
          <ul className="nav nav-pills">
              <li role="presentation" className="active">
                <Link className="navbar-brand" to="/">Login功能</Link>
              </li>
              <li role="presentation">
                <Link className="navbar-brand" to="/signup">注册</Link>
              </li>
            </ul>
        </div>

      </div>
    );
  }
}
 
export default NavigationBar;