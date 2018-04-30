import React from 'react'

export const TextPost = (props) => {
    return (
        <div className="col s12 m12 l12">
            <div className="card whitesmoke">
                <div className="card-content black-text ">
                    <p>{props.text}</p>
                    <div className="card-action">
                        <p href="#">Text Post</p>
                        <p className="comments">{props.comments} Comments</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
               
