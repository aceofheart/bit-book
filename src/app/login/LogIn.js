import React,{Component, Fragment} from "react";
import "./LogIn.css";
import { authenticationService } from "../../services/LogInService";
import { withRouter } from 'react-router-dom';


 class LogInPage extends Component {
    state = {
          username: null,
          password: null,
          error: null
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value
        const name = target.name;
        console.log(value);
        

        
        this.setState({
            [name]: value
        });
    }

    loginProfile = (event) => {
        event.preventDefault()
        
        authenticationService.login(this.state.username, this.state.password)
        .then((response) => {
            console.log(response);
                return response.json();
            }).catch((error) => console.log(error))

            .then(response => {
                if (response.sessionId !== undefined) {
                    authenticationService.succsesfullLogin(response.sessionId)
                     this.props.history.push('/')
                }else{
              
                 this.setState({
                     error: response.error.message 
                 })}
          })
          
    }
    
    render (){
        let disableButton=(!this.state.username || !this.state.password)
      
        return(
            <Fragment>
            
            <div id="login">
                <h3>Welcome back</h3>
                <div className="col s12">
                    <div className="fieldWrap input-field col s12">
                        <label>Username<span className="req">*</span></label>
                        <input onChange={this.handleInputChange} className="logInInput validate" name="username" type="text" required autoComplete="off"/>
                        
                    </div>
                    <div className="fieldWrap input-field col s12">
                        <label>Password<span className="req">*</span></label>
                        <input onChange={this.handleInputChange} name="password" className="logInInput validate" type="password" required autoComplete="off"/>
                        
                    </div>
                    <p className="validation-error">{this.state.error}</p>
                    <button onClick={this.loginProfile} className=" btn btnLogIn" disabled={disableButton}>Log in</button>

                </div>
            </div>
          
         
            </Fragment>
            
        )
    }
}
export default withRouter(LogInPage)