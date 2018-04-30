import { Author } from "../entities/Author";
import { User } from "../entities/User";
import { urlBase, header } from '../shared/constants';

class UserService {

    getProfile() {
        return fetch(`${urlBase}/api/profile`, {
            headers: {
              ...header,
              "SessionId": sessionStorage.getItem("sessionId")
            }

        }).then(response => response.json())
            .then(response => {

                return new Author(response)
            })
    }

    getUserInfo(authorId) {
        return fetch(`${urlBase}/api/users/${authorId}`, {
            headers: {
               ...header,
               "SessionId": sessionStorage.getItem("sessionId")
            }

        }).then(response => response.json())
            .then(response => {


                return new Author(response)


            })


    }

    getUserListSearch = () => {
        return fetch(`${urlBase}/api/users`, {
            headers: {
               ...header,
               "SessionId": sessionStorage.getItem("sessionId")
            }

        }).then(response => response.json())
            .then(response => {
                return response.map((user) => new User(user))

            })


    }
    
    profileUpdate(data){
        return fetch(`${urlBase}/api/Profiles`, {
            method: "PUT",
            headers: {
              ...header,
              "SessionId": sessionStorage.getItem("sessionId")
            },
            body: JSON.stringify(data),

        })
        .then(response => console.log(response))
       
        }

}


export const userService = new UserService()