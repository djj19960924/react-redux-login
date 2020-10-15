import React, { Component } from 'react'
import classname from "classname"
import { withRouter } from "react-router-dom"

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: {},
      isLoading: false
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.signupActions.userSignupRequest(this.state).then(
      ()=>{
        //history不存在
        this.props.history.push("/")
      },
      ({response})=>{
        this.setState({
          errors: response.data,isLoading:false
        })
      }
    )
  }

  render() { 
    const { username,email,password,passwordConfirmation,errors } = this.state
    return ( 
      <form onSubmit={this.onSubmit}>
        <h1>Join our community</h1>
        <div className="form-group">
          <label className="control-lable">Username</label>
          <input 
            type="text" 
            name="username"
            value={username}
            onChange= {this.onChange}
            className={ classname("form-control",{'is-invalid':errors.username})}
          />
          { errors.username && <span className="form-text text-muted">{ errors.username }</span> }
          <label className="control-lable">Email</label>
          <input 
            type="email" 
            name="email"
            value={email}
            onChange= {this.onChange}
            className={ classname("form-control",{'is-invalid':errors.email})}
          />
          { errors.email && <span className="form-text text-muted">{ errors.email }</span> }
          <label className="control-lable">Password</label>
          <input 
            type="password" 
            name="password"
            value={password}
            onChange= {this.onChange}
            className={ classname("form-control",{'is-invalid':errors.password})}
          />
          { errors.password && <span className="form-text text-muted">{ errors.password }</span> }
          <label className="control-lable">PasswordConfirmation</label>
          <input 
            type="password" 
            name="passwordConfirmation"
            value={passwordConfirmation}
            onChange= {this.onChange}
            className={ classname("form-control",{'is-invalid':errors.passwordConfirmation})}
          />
          { errors.passwordConfirmation && <span className="form-text text-muted">{ errors.passwordConfirmation }</span> }
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">注册</button>
        </div>
      </form>
    );
  }
}
 
export default withRouter(SignupForm);