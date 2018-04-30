import React, { Component } from 'react';
import { postService } from '../../../services/PostService';



export class NewImagePost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newBody: "",
            error: null
        }
    }



    changeBodyHandler = (event) => {
        this.setState({
            newBody: event.target.value,
            error: null
        })
    }

    isValid = (value) => {
        const extensionLists = ['jpeg', 'jpg', 'gif', 'bmp', 'png',"JPG"];

        for (let i = 0; i < extensionLists.length; i++) {
            if (value.includes(extensionLists[i])) {
                return true
            }
        }

        return false
    }

    fetchPost = (event) => {
        event.preventDefault();
        const imageUrl = this.state.newBody;

        if (!this.isValid(imageUrl)) {
            return this.setState({
                error: 'Please select a valid image'
            });
        }

        const body = {
            imageUrl: imageUrl
        }

        postService.createImagePost(body)
            .then(() => this.props.onPostCreate())

    }


    render() {

        return (
            <div className='newPostDiv '>
                <h4 ref={subtitle => this.props.setSubtitle(subtitle)}>New image post</h4>
                <h6>Post content</h6>
                <input onChange={this.changeBodyHandler} id="textarea2" className="materialize-textarea"></input>
                <p className="validation-error">{this.state.error}</p>
                <button onClick={this.fetchPost} className='waves-effect waves-light btn right'>Post</button>

            </div>
        )
    }
}
