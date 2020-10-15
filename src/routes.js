import React from 'react'
import { Route } from "react-router-dom"
import App from "./components/App"
import SignupPage from "./components/signupPage/signupPage"

export default (
  <div className="container">
    <Route exact path="/" component={App}/>
    <Route exact path="/signup" component={SignupPage} />
  </div>
)

