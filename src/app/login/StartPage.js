import React, { Component } from 'react';
import  RegisterPage  from './RegisterPage';
import  LogInPage  from './LogIn';
import { RegisterText } from "./RegisterText";
import { LogInText } from "./LogInText";


export class StartPage extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            value: "login-button"
        })
    }

    onButtonSelect = (event) =>{
        const buttonId = event.target.id;
        this.setState({
            value : buttonId
        })

    }
    renderForm = () => {
        return (this.state.value === 'register-button') ? 
                 <RegisterPage />
                 : <LogInPage />
    }
    renderText = () => {
        return (this.state.value === 'register-button') ? 
                <RegisterText /> 
                : <LogInText />
    }

    render() {
        let registerActive = "";
        if(this.state.value === 'register-button'){
            registerActive = "active"
        }
        let logInActive = "";
        if(this.state.value === 'login-button'){
            logInActive = "active"
        }

      
        return (
            <div className="login-background">
                <div className="form">
                    <ul className="tab-group">
                        <li className={`tab ${registerActive}`}><div onClick={this.onButtonSelect} id="register-button">Register</div></li>
                        <li className={`tab ${logInActive}`}><div onClick={this.onButtonSelect} id="login-button">Log in</div></li>
                    </ul>
                    <div className= "line"></div>
                     <div className="tab-content">
                        {this.renderForm()}
                    </div>
                </div>
                {this.renderText()}
            </div>  
        )
    }
}

