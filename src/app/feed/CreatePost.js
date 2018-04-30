import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';
import "./CreatePost.css";
import { NewTextPost } from './newPosts/NewTextPost';
import { NewVideoPost } from './newPosts/NewVideoPost';
import { NewImagePost } from './newPosts/NewImagePost';


class CreatePost extends Component {

    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            postType: ""
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal = (event) => {
        this.setState({
            modalIsOpen: true,
            postType: event.target.id
        });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    onPostCreate = () => {
        this.closeModal();
        this.props.refreshPostList();
    }


    setSubtitle = (subtitle) => {
        this.subtitle = subtitle;
    }

    renderAddPostWindow() {
        if (this.state.postType === 'image') {
            return <NewImagePost setSubtitle={this.setSubtitle} closeModal={this.closeModal} onPostCreate={this.onPostCreate} />


        } else if (this.state.postType === 'video') {
            return <NewVideoPost setSubtitle={this.setSubtitle} closeModal={this.closeModal} onPostCreate={this.onPostCreate} />


        } else if (this.state.postType === 'text') {
            return <NewTextPost setSubtitle={this.setSubtitle} closeModal={this.closeModal} onPostCreate={this.onPostCreate} />
        }
    }




    render() {
        const modalStyle = {
            content: {
                width: "50%",
                height: "48%",
                margin: '150px auto',
                paddingLeft: "50px"
                
            }
         
        }
        return (
            <Fragment>
                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large  orange accent-3">
                        <i className="large material-icons"><i className="material-icons">add_circle</i></i>
                    </a>
                    <ul>
                        <li><a className="btn-floating cyan darken-2" onClick={this.openModal} ><i id='video' className="material-icons">ondemand_video</i></a></li>
                        <li><a className="btn-floating green" onClick={this.openModal}><i id='image' className="material-icons">image</i></a></li>
                        <li><a className="btn-floating blue" onClick={this.openModal}><i id='text' className="material-icons">text_fields</i></a></li>
                    </ul>
                </div>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={modalStyle}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    {this.renderAddPostWindow()}
                </Modal>
            </Fragment>




        )
    }

}




export { CreatePost };