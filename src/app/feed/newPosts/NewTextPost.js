import React, { Component } from 'react';
import { postService } from '../../../services/PostService';



export class NewTextPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newBody: ""
        }
    }

    changeBodyHandler = (event) => {
        this.setState({
            newBody: event.target.value
        })
    }

    fetchPost = (event) => {
        event.preventDefault();
        console.log(this.state.newBody);

        this.props.closeModal();

        const body = {
            text: this.state.newBody,
        }


        postService.createTextPost(body)
            .then(() => this.props.onPostCreate())

    }

    render() {

        return (
            <div className='newPostDiv'>
                <h4 ref={subtitle => this.props.setSubtitle(subtitle)}>New post</h4>
                <h6>Post content</h6>
                <input id="textarea1" onChange={this.changeBodyHandler} type="text" value={this.state.newBody} className="materialize-textarea"></input>
                <button onClick={this.fetchPost} className='waves-effect waves-light btn right'>Post</button>
            </div>
        )
    }
}
