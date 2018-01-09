import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { selectUser, showDetails, deleteUser } from '../actions/index'
class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: {}
        };
    }
    userSelect(user) {
        this.state.newUser = user;
        this.setState({ newUser: this.state.newUser });
    }
    editUser(newUser) {
        this.props.showDetails(2);
        this.props.selectUser(newUser);
    }
    addUser() {
        this.props.showDetails(1);
    }
    deleteUser(deleteUser) {
        this.props.deleteUser(deleteUser);
    }
    viewUser(editUser) {
        this.props.selectUser(editUser);
        this.props.showDetails(3);
    }
    renderList() {
        console.log("----------------------------------------------------------");
        console.log(this.props.users);
        console.log("----------------------------------------------------------");
        return this.props.users.map((user) => {
            return (
                <div key={user.id}>
                    <input value={user.id} type="radio" onClick={this.userSelect.bind(this, user)} ></input>
                    {user.first}{user.last} {user.age} {user.description}
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderList()}
                </ul>
              
                    <div>
                        <ul>
                            <li><Link to="/add" onClick={this.addUser.bind(this)}>add</Link></li>
                            <li><Link to="/edit" onClick={this.editUser.bind(this, this.state.newUser)}> edit </Link></li>
                            <li><Link to="/view" onClick={this.viewUser.bind(this, this.state.newUser)}> view </Link></li>
                            <li><Link to="/" onClick={this.deleteUser.bind(this, this.state.newUser)}> delete</Link> </li>
                        </ul>
                     
                    </div>
               
            </div>

        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectUser: selectUser, showDetails: showDetails, deleteUser: deleteUser }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
