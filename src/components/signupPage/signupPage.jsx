import React, { Component } from 'react'
import SignupForm from "./signupForm"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as signupActions from "../../actions/signupActions"

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <SignupForm signupActions={this.props.signupActions}/>
        </div>
        <div className="col-md-3"></div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signupActions: bindActionCreators(signupActions,dispatch)
  }
}

export default connect(null,mapDispatchToProps)(SignupPage);