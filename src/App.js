import React from "react";
import "./App.css";
import { Switch, Route } from 'react-router-dom';
import userService from "./utils/userService";
import NavBar from "./components/NavBar/NavBar";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";



class App extends React.Component {
  state = {
    user: userService.getUser()
  };


  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = async () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <div className="App">
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>
          <Route path="/login" exact render={() => (<LoginPage handleSignupOrLogin={this.handleSignupOrLogin} />)}/>
          <Route path="/signup" exact render={() => (<SignupPage handleSignupOrLogin={this.handleSignupOrLogin} />)}/>
        </Switch>
      </div>
    );
  }
}

export default App;
