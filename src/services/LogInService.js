import { urlBase, header } from '../shared/constants'

class AuthenticationService {
    register = (data) => {

        return fetch(`${urlBase}/api/register`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                ...header
            }
        })

    }

    login = (username, password) => {
        return fetch(`${urlBase}/api/login`, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 
                ...header

            }
         })

    }

    succsesfullLogin = (data) => {
        sessionStorage.setItem("sessionId", data)
    }

    isUserAuthenticated = () => {
        return !!sessionStorage.getItem("sessionId");
    }

    logout = () => {
        sessionStorage.removeItem("sessionId");
    }
}







export const authenticationService = new AuthenticationService();