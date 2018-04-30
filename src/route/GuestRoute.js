import { authenticationService } from "../services/LogInService";
import React, { Component } from "react";


export default ComposedComponent =>
  class Auth extends Component {
    componentDidMount = () => {
      if (authenticationService.isUserAuthenticated()) {
        console.log("da")
    } else 
      console.log("ne");
    }


    render() {
      return <ComposedComponent {...this.props} />;
    }
  };