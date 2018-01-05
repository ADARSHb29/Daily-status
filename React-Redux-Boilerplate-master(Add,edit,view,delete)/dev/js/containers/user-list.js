import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser, showDetails,deleteUser } from '../actions/index'
class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uservalue: {},
        };
    }
    selected(eventobj) {
        this.state.uservalue = eventobj;
        this.setState({
            uservalue: this.state.uservalue
        });
        console.log(this.state.uservalue);
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
    viewUser(viewUser)
    {
        this.props.selectUser(viewUser);
        this.props.showDetails(3);  
    }
    componentWillMount() {
        console.log("inside component will mount");
    }
    componentDidMount() {
        console.log("inside component did mount");
    }
    renderList() {
        return this.props.users.map((user) => {
            return (
                <div key={user.id}>
                    <input type="radio"
                        onClick={this.selected.bind(this,user)} />
                    <li  //onClick={() => this.props.selectUser(user)}
                    >
                        {user.firstname} {user.lastname} {user.age}
                    </li>
                </div>
            );
        });
    }
    render() {
        return (
            <ul>
                {this.renderList()}
                <button onClick={this.addUser.bind(this)}>Add</button>
                <button onClick={this.editUser.bind(this,this.state.uservalue)}>Edit</button>
                <button onClick={this.viewUser.bind(this,this.state.uservalue)} >View</button>
                <button onClick={this.deleteUser.bind(this,this.state.uservalue)}>Delete</button>
            </ul>
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
    return bindActionCreators({ selectUser: selectUser, showDetails: showDetails,deleteUser: deleteUser }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
