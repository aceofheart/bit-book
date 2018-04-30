import { VideoPost } from "../entities/Post";
import { ImagePost } from "../entities/Post";
import { TextPost } from "../entities/Post";
import { urlBase, header } from '../shared/constants'

class PostService {



    createTextPost(body) {
        const url = "/api/TextPosts"

        return this.createPost(body, url)
    }

    createVideoPost(body) {
        const url = "/api/VideoPosts"
        return this.createPost(body, url)
    }


    createImagePost(body) {
        const url = '/api/ImagePosts'
        return this.createPost(body, url)
    }

    createPost(body, url) {
        const fullUrl = `${urlBase}` + url;
        return fetch(fullUrl, {
            method: "POST",
            body: JSON.stringify(body),
            headers:{
               ...header,
               "SessionId": sessionStorage.getItem("sessionId")
            }
        })
            .catch(error => {
                return "Error!"
            })
    }

    getData() {
        return fetch(`${urlBase}/api/posts`, {
            headers:{
            ...header,
            "SessionId": sessionStorage.getItem("sessionId")

            }

        })

            .then(response => response.json())
            .then(response => {

                return response.map(post => {
                    if (post.type === 'image') {
                        return new ImagePost(post);
                    }
                    else if (post.type === 'video') {
                        return new VideoPost(post);
                    }

                    else {
                        return new TextPost(post);
                    }
                })


            })
    }

    getPostDetails(type, postId) {
        if (type === "image") {
            type = "ImagePosts";
        } else if (type === "video") {
            type = "VideoPosts";
        } else {
            type = "TextPosts"
        }

        return fetch(`${urlBase}/api/${type}/${postId}`, {
            headers:{
                ...header,
                "SessionId": sessionStorage.getItem("sessionId")
             }
        })
            .then(response => response.json())
            .then(response => {
                if (response.type === "image") {
                    return new ImagePost(response);
                }
                if (response.type === 'video') {
                    return new VideoPost(response);
                }

                if (response.type === 'text') {
                    return new TextPost(response);
                }
            })
            .catch(error => console.error("Error: ", error))
    }


    deletePost(postId) {
        return fetch(`${urlBase}/api/Posts/${postId}`,{
            method: "DELETE",
            headers:{
                ...header,
                "SessionId": sessionStorage.getItem("sessionId")
    
                }
        })
        .then(response => console.log(response))
        .catch(error => console.error("Error: ", error))
    }

}

export const postService = new PostService()