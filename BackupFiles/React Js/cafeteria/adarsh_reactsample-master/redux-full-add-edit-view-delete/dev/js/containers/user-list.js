import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser, showDetails,deleteUser } from '../actions/index'


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
    deleteUser(deleteUser)
    {
        this.props.deleteUser(deleteUser);
    }
    viewUser(editUser)
    {
        this.props.selectUser(editUser);
        this.props.showDetails(3);  
    }
    renderList() {
        return this.props.users.map((user) => {
            return (
                <div key={user.id}>
                    <input value={user.id} type="radio" id={user.id} onClick={this.userSelect.bind(this, user)} ></input>
                    {console.log("#############################",user.id)}
                    {user.first}{user.last} {user.age}
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
                <button onClick={this.addUser.bind(this)}> add  </button>
                <button onClick={this.editUser.bind(this, this.state.newUser)}> edit </button>
                <button onClick={this.viewUser.bind(this, this.state.newUser)}> view </button>
                <button onClick={this.deleteUser.bind(this, this.state.newUser)}> delete </button>
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
    return bindActionCreators({ selectUser: selectUser, showDetails: showDetails,deleteUser:deleteUser }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
