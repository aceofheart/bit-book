import React,{Component, Fragment} from "react";
import "./LogIn.css";
import { authenticationService } from "../../services/LogInService";
import { withRouter } from 'react-router-dom'

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
       
        
        this.setState({
            [name]: value
        });
    }

    handleInvalidInput = () =>{
        this.setState({
            error: "Invalid username or password"
        })
    }

    loginProfile = (event) => {
        event.preventDefault()

        authenticationService.login(this.state.username, this.state.password)
            .then((response) => {
                return response.json();
            }).catch((error) => console.log(error))

            .then(response => {
                if (response.sessionId !== undefined) {
                    authenticationService.succsesfullLogin(response.sessionId)
                } else {
                    alert("invalid username or password")
                }
                return response;
            })
            .then((r) => r).then(() => this.props.history.push('/'))
    }
    render (){
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
                    <button onClick={this.loginProfile} className="button button-block">Log in</button>

                </div>
            </div>
            <div className="lorem hide-on-med-and-down">
                <h2>Bit book Log in</h2>
                <p className="loremText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
       
         
            </Fragment>
            
        )
    }
}
export default withRouter(LogInPage)