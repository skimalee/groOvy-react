import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import userService from '../../utils/userService';
import { 
  LoginPageContainer,
  Form,
  Input
} from './style'

class LoginPage extends Component {
  
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      console.log(err)
    }
  }

  render() {
    return (

      <LoginPageContainer>
        <Form onSubmit={this.handleSubmit} >
          <div>
            <Input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
            <Input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </Form>
      </LoginPageContainer>
    );
  }
}

export default withRouter(LoginPage);