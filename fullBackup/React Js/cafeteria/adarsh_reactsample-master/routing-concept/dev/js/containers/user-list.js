import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser, showDetails, deleteUser } from '../actions/index';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
        this.props.selectUser(newUser);
    }
   
    deleteUser(deleteUser) {

        this.props.deleteUser(deleteUser);
    }
    viewUser(editUser) {
        this.props.selectUser(editUser);
    }


    render() {

        return (
            <div>
                <ul>
                    {this.props.users.map((user) => {
                        return (

                            <div key={user.id}>
                                <input value={user.id} type="radio" onClick={this.userSelect.bind(this, user)}></input>
                                {user.first}{user.last} {user.age} 
                            </div>
                        );
                    })}
                </ul>
                
                        <li><Link to="/add" > add  </Link></li>
                        <li><Link to={`/edit/${this.state.newUser.id}`}> edit </Link></li>
                        <li> <Link to={`/view/${this.state.newUser.id}`}> view </Link> </li>
                         <li><Link to ="/" onClick={this.deleteUser.bind(this, this.state.newUser)}> delete</Link></li>

                  
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
    return bindActionCreators({
        selectUser: selectUser,
        deleteUser: deleteUser
    }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
