import React, { Component } from 'react'
import { userService } from "../../../services/UserService"

export class CommentItem extends Component {
    state = {
        author: null,

    }

    componentDidMount() {
        this.loadAuthor();
    }

    loadAuthor = () => {
        userService.getUserInfo(this.props.authorId)
            .then(author => {
             this.setState({
                    author
                })
            })
    }

    render() {
        if (!this.state.author) {
            return <p>Loading...</p>
        }

        return (
            <div className="card horizontal" >
                <div className="commDiv">
                    <img src={this.state.author.avatarUrl} alt="" className="circle " />
                    <span className="textUser">{this.state.author.name}</span>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>{this.props.body}</p>
                    </div>

                </div>
            </div >


        )
    }
}


