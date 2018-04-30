import React,{Component, Fragment} from "react";
import "./LogIn.css";
import { authenticationService } from "../../services/LogInService";
import { withRouter } from 'react-router-dom'

 class LogInPage extends Component {
    state = {
        username: null,
        password: null
    }
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value
        const name = target.name;
       
        
        this.setState({
            [name]: value
        });
    }
    loginProfile = (event) => {
        event.preventDefault();

        authenticationService.login(this.state.username, this.state.password)
            .then((response) => {
                return response.json();
            }).catch((error) => console.info(error))

            .then(response => {
                if (response.sessionId !== undefined) {
                    authenticationService.succsesfullLogin(response.sessionId)
                } else {
                    alert("Invalid username or password")
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
                <div>
                    <div className="fieldWrap">
                        <label>Username<span className="req">*</span></label>
                        <input onChange={this.handleInputChange} className="logInInput" name="username" type="text" required autoComplete="off"/>
                    </div>
                    <div className="fieldWrap">
                        <label>Password<span className="req">*</span></label>
                        <input onChange={this.handleInputChange} name="password" className="logInInput" type="password" required autoComplete="off"/>
                    </div>
                    <button onClick={this.loginProfile} className="button button-block">Log in</button>

                </div>
            </div>
            <div className="lorem">
                <h2>Bit book Log in</h2>
                <p className="loremText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
       
         
            </Fragment>
            
        )
    }
}
export default withRouter(LogInPage)