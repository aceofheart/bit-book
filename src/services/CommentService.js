import { Comment } from "../entities/Comment";
import { urlBase, header } from '../shared/constants'

class CommentService {
    getCommentData(postId) {
        return fetch(`${urlBase}/api/Comments?postId=${postId}`, {
            headers:{
                ...header,
                "SessionId": sessionStorage.getItem("sessionId")
    
            }

        }).then(response => response.json())
            .then(response => {
             return response.map(comment => {
                    return new Comment(comment)

                })


            })


    }
    postCommentData(data) {
        return fetch(`${urlBase}/api/Comments`, {
            method: "POST",
            headers:{
                ...header,
                "SessionId": sessionStorage.getItem("sessionId")
    
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())

    }
}
export const commentService = new CommentService()