import React,{ Component, Fragment} from "react";
import "./LogIn.css";
import { withRouter } from 'react-router-dom';
import { authenticationService } from "../../services/LogInService";

 class RegisterPage extends Component {
    state={
        username: null,
        name: null,
        email: null,
        password: null
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
   event.preventDefault();
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
                            <div className="top-row">
                                    <div className="fieldWwrap">
                                        <label>Username<span className="req">*</span></label>
                                        <input onChange={this.getDataFromInputs} name="username" className="logInInput" type="text" required autoComplete="off" />
                                    </div>
                                    <div className="fieldWwrap">
                                        <label>Name<span className="req">*</span></label>
                                        <input onChange={this.getDataFromInputs} name="name" className="logInInput" type="text" required autoComplete="off" />
                                    </div>
                            </div>
                                    <div className="fieldWrap">
                                        <label>Email address<span className="req">*</span></label>
                                        <input onChange={this.getDataFromInputs} name="email" className="logInInput" type="email" required autoComplete="off" />
                                    </div>
                                    <div className="fieldWrap">
                                        <label>Password<span className="req">*</span></label>
                                        <input onChange={this.getDataFromInputs} name="password" className="logInInput" type="password" required autoComplete="off"/>
                                    </div>
                                    <button onClick={this.onRegisterButton} className="button button-block">Sign up</button>
                        
                    </div>
                        <div className="lorem">
                            <h2>Bit book Register</h2>
                            <p className="loremText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                </div>
            </Fragment>
            
        )
    }
}
export default withRouter(RegisterPage)