import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { userService } from "../../../services/UserService";
import { UserItem } from './UserItem'
import { Search } from "../../partials/Search"


export class PeoplePage extends Component {
    state = {
        users: [],
        searchedUsers: [],
        searchValue: ""
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentWillUpdate = (nextProps, nextState) => {
        if (nextState.searchValue !== this.state.searchValue) {
            this.searchUsers(nextState);
        }
    }

    loadPosts = () => {
        userService.getUserListSearch()
            .then(myList => {
                this.setState({ users: myList, searchedUsers: myList })
            })
    }

    onChangeInputValue = (event) => {
     this.setState({
            searchValue: event.target.value
        })
    }

    searchUsers = (nextState) => {
        const searchValue = nextState.searchValue;
        const { users } = nextState;
        const filteredUsers = users.filter(user => {
            return user.name.toLowerCase().includes(searchValue.toLowerCase().trim())
        })

        this.setState({
            searchedUsers: filteredUsers
        })
    }

    filterUsers = (users) => {
        return users;
    }

    renderUsers = () => {
    
        return this.state.searchedUsers.map(user => {
         
       
            return (
                <Link to={`/profile/${user.userId}`} key={user.userId}>
                    <UserItem userInfo={user} />
                </Link>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <Search searchValue={this.state.searchValue} onChangeInputValue={this.onChangeInputValue} />
                <div className="row">
                    {this.renderUsers()}
                </div>
            </div >
        )
    }

}