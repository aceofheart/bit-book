import React,{ Component, Fragment} from "react";
import "./LogIn.css";
import { withRouter } from 'react-router-dom';
import { authenticationService } from "../../services/LogInService";

 class RegisterPage extends Component {
    state={
        username: null,
        name: null,
        email: null,
        password: null,
    }
    
    getDataFromInputs = (event) =>{
        const target = event.target;
        const value = target.value;
        const name = target.name;

         this.setState({
            [name]: value
        });
  }

  onRegisterButton = (event) =>{
   
    const data={
        username: this.state.username,
        password: this.state.password,
        name: this.state.name,
        email: this.state.email
    }
    
    
    authenticationService.register(data)
    .then(response =>{
        console.log(response);
    })
   
    
  }

    render (){
       
        return(
            <Fragment>
           
                <div id="signup">
                    <h3>Join us</h3>
                    <div className="registerForm">
                        <div className="col s12">
                            <div className="top-row">
                                    <div className="fieldWwrap">
                                        <label>Username<span className="req">*</span></label>
                                        <input onChange={this.getDataFromInputs} name="username" className="logInInput validate" type="text" required autoComplete="off" />
                                        <span className="helper-text" data-error="invalid username" ></span>
                                    </div>
                                    <div className="fieldWwrap">
                                        <label>Name<span className="req">*</span></label>
                                        <input onChange={this.getDataFromInputs} name="name" className="logInInput validate" type="text" required autoComplete="off" />
                                        <span className="helper-text" data-error="invalid name" ></span>
                                    </div>
                            </div>
                                    <div className="fieldWrap">
                                        <label>Email address<span className="req">*</span></label>
                                        <input onChange={this.getDataFromInputs} name="email" id="email" className="logInInput validate" type="email" required autoComplete="off" />
                                        <span className="helper-text" data-error="invalid email"></span>
                                    </div>
                                    <div className="fieldWrap">
                                        <label>Password<span className="req">*</span></label>
                                        <input onChange={this.getDataFromInputs} name="password" className="logInInput" type="password" required autoComplete="off"/>
                                        <span className="helper-text" data-error="invalid password"></span>
                                    </div>
                                    <button onClick={this.onRegisterButton} className="btn btnLogIn" >Create Account</button>
                        </div>
                    </div>
                      
                </div>
            </Fragment>
            
        )
    }
}
export default withRouter(RegisterPage)