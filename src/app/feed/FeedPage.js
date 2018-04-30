import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { FilterPosts } from "./FilterPosts";
import { CreatePost } from './CreatePost';
import { ImagePost } from "./ImagePost";
import { VideoPost } from "./VideoPost";
import { TextPost } from "./TextPost";
import { postService } from "../../services/PostService";
import M from 'materialize-css';
import "./FeedPage.css";


export class FeedPage extends Component {
    state = {
        posts: [],
        filteredPosts: [],
        postType: null

    }
    
    componentDidMount() {
    
      this.loadPosts();
        
        const elem = document.querySelector('select');
        const instance = M.FormSelect.init(elem)
    }
    componentWillUpdate(nextProps,nextState){
      
        if(nextState.postType === "all"){
            this.loadPosts();
        }else if(nextState.postType !== this.state.postType){
            this.renderFilteredPosts(nextState);
        }
    }
    
    
  
    getFilterValue = (event) =>{
        this.setState({
            postType: event.target.value
      })
    }

    loadPosts = () => {
        
        postService.getData()
            .then(myPosts => {
                this.setState({ posts: myPosts, filteredPosts: myPosts })
            })
     
        
    }


    renderPosts = () => {
        return this.state.filteredPosts.map(post => {
            if (post.isImage()) {
                return (
                    <Link to={`/post/image/${post.id}`} key={post.id}>
                        <ImagePost url={post.imageUrl} key={post.id} comments={post.commentsNum} />
                    </Link>
                )
            }
            else if (post.isVideo()) {
                return (
                    <Link to={`/post/video/${post.id}`} key={post.id}>
                        <VideoPost url={post.videoUrl} key={post.id} comments={post.commentsNum} />
                    </Link>
                )
            } else {
                return (
                    <Link to={`/post/text/${post.id}`} key={post.id} >
                        <TextPost text={post.text} key={post.id} comments={post.commentsNum} />
                    </Link>
                )
            }
        })
    }
    renderFilteredPosts = (nextState) => {
        const type = nextState.postType;
        const { posts } = nextState;
        const filtered = posts.filter(post =>{
            return post.type === type;
        }) 
     
        this.setState({
            filteredPosts: filtered
        })
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                <FilterPosts filter={this.getFilterValue}/>
                    <div className="row">
                        {this.renderPosts()}
                    </div>
                </div>
                <CreatePost refreshPostList={this.loadPosts} />
            </Fragment>
        )
    }

}






