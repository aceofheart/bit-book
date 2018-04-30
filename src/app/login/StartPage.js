import React, { Component } from 'react'

import  RegisterPage  from './RegisterPage'
import  LogInPage  from './LogIn'


export class StartPage extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            value: null
        })
    }
    componentDidMount() {
        console.log("cdm");
    }


    onButtonSelect = (event) =>{
        const buttonId = event.target.id;
      
        
        this.setState({
            value : buttonId
        })

    }
    renderPage = () => {
        return (this.state.value === 'signup-button') ? 
            <RegisterPage  /> 
            : <LogInPage />
    }

    render() {
        return (
            <div className="login-background">
                <div className="form">
                    <ul className="tab-group">
                        <li className="tab-active"><a onClick={this.onButtonSelect} href="#login" id="signup-button">Sign up</a></li>
                        <li className="tab"><a onClick={this.onButtonSelect} href="#register" id="login-button">Log in</a></li>
                    </ul>
            
                    <div className="tab-content">
                    {
                     this.renderPage()
                    }
                    </div>
         
                </div>
            </div>  
        )
    }
}

