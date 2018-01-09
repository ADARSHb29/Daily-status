import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
class UserDetail extends Component {
    render() {
        if (!this.props.user) {
            return (<div> {this.props.showContent.showContent == 3 ?<div>Select a user...</div>:null}</div>);
        }
        return (
            <div>
                <img src={this.props.user.thumbnail} />
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>Age: {this.props.user.age}</h3>
                <h3>Description: {this.props.user.description}</h3>
                <li><Link to="/" >back</Link></li>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser,
        showContent: state.showContent
    };
}

export default connect(mapStateToProps)(UserDetail);