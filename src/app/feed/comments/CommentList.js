import React, { Component } from "react"
import { CommentItem } from "./CommentItem"


export class CommentList extends Component {


    renderEmptyComments = () => {
        return (
            <div className="card horizontal">
                <div className="card-stacked">
                    <div className="card-content">
                        <p>No comments yet</p>
                    </div>

                </div>
            </div >
        )
    }

    renderComments = () => {
        return this.props.comments.map(comment => {
            return <CommentItem body={comment.body} key={comment.id} authorId={comment.authorId} />
        })
    }


    render() {
        return (
            <div>
                {!this.props.comments.length
                    ? this.renderEmptyComments()
                    : this.renderComments()
                }
            </div>
        )


    }

}

