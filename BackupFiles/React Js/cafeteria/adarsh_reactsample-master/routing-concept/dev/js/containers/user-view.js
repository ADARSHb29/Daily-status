import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {store} from '../index';
class UserDetail extends Component {

    componentDidMount(){
        const a = fetch('http://localhost:3001/employeeList/'+this.props.match.params.id).then(
             data =>
                 ({
                     type: "USER_SELECTED",
                     payload: data.json()
                 }),
                 
     
             error => console.log(error));
         store.dispatch(
             a
         );
     };

    render() {
        if (!this.props.user) {
            return (<div>Select a user...</div>);
        }
        return (
            <div className="userDetails">
                    <img src={this.props.user.thumbnail} />
                    <h2>{this.props.user.first} {this.props.user.last}</h2>
                    <h3>Age: {this.props.user.age}</h3>
                    <h3>Description: {this.props.user.description}</h3>
                    <Link to="/" >Back</Link>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);