import React, { Component } from "react";
import M from 'materialize-css';
import "./EditProfile.css";
import { userService } from "../../services/UserService"



export class EditProfile extends Component {
    state={

        newName: this.props.profileInfo.name,
        newAbout: this.props.profileInfo.about,
        newAvatarUrl: this.props.profileInfo.avatarUrl,
        error: null
    }

    componentDidMount = () => {
        const modal1 = document.querySelector('#modal1');
        this.instance = M.Modal.init(modal1);
       
    }
       

    handleCloseModal = () => {
       
        this.instance.close();
    }

    onNameChange = (event) => {
        this.setState({
            newName: event.target.value
        })
    }
    onAboutChange = (event) =>{
        this.setState({
            newAbout: event.target.value
        })
    }
    onImageChange = (event) =>{
        this.setState({
            newAvatarUrl: event.target.value,
            error: null
        })
    }

    isValid = (value) => {
        const extensionLists = ['jpeg', 'jpg', 'gif', 'bmp', 'png'];

        for (let i = 0; i < extensionLists.length; i++) {
            if (value.includes(extensionLists[i])) {
                return true
            }
        }

        return false
    }

    onUpdateProfile = (event) => {
        event.preventDefault();
        const imageUrl = this.state.newAvatarUrl;
        const shortedAbout = this.state.newAbout.slice(0,10).concat("...")
      
        

        if (!this.isValid(imageUrl)) {
            return this.setState({
                error: 'Please select a valid image'
            });
        }

        const data = {
            id: this.props.profileInfo.id,
            name: this.state.newName,
            email: this.props.profileInfo.email,
            aboutShort: shortedAbout,
            about: this.state.newAbout,
            avatarUrl: imageUrl
        }
        
                userService.profileUpdate(data)
                .then(()=>{
                this.props.onUpdate()
                })
               
      this.handleCloseModal()

 }

    render() {
     
        return (
           
            <div>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                             <h5>Update profile</h5>
                             <img className="materialboxed z-depth-2 imagePost" src={this.props.profileInfo.avatarUrl} alt="imagePost" />
                      
                                     <div className="input-field col s6">
                                        <input onChange={this.onImageChange} value={this.state.newAvatarUrl} id="profile-photo" type="text" className="validate"/>
                                        <label className="active" htmlFor="textarea1">Profile photo</label>
                                        <p className="validation-error">{this.state.error}</p>
                                      </div>
                      
                                     <div className="input-field col s6">
                                        <input onChange={this.onNameChange} value={this.state.newName} id="first_name" type="text" className="validate"/>
                                        <label className="active" htmlFor="textarea1">Name</label>
                                      </div>
                                    
                                     <div className="input-field col s12">
                                             <textarea onChange={this.onAboutChange} value={this.state.newAbout} id="textarea1" className="materialize-textarea"></textarea>
                                             <label className="active" htmlFor="textarea1">About</label>
                                     </div>
                                    
                                    <a onClick={this.handleCloseModal} className="waves-light btn">Close</a>
                                    <a onClick={this.onUpdateProfile} className=" waves-light btn">Update</a>
                            </div>
                   
                        </div>
                     <div className="fixed-action-btn">
                        <button data-target="modal1" className="btn modal-trigger btn-floating btn-large teal darken-3"><i className="material-icons">edit</i></button>
                </div>

            </div>


        )
    }
                       
                       
                                
                                             
                                             


}