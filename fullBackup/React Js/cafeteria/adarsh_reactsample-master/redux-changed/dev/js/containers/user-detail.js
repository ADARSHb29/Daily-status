import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { modify } from '../actions/index';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class UserDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }


    ageChange(event) {
        this.state.user.age = event.target.value;
        this.setState({ user: this.state.user });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            user: {
                first: nextProps.user.first,
                last: nextProps.user.last,
                age: nextProps.user.age,
                description: nextProps.user.description,
                id: nextProps.user.id
            }
        })
    }


    render() {
        if (!this.props.user) {
            return (<div>Select a user...</div>);
        }
        return (
            <div>
                <img src={this.props.user.thumbnail} />
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>Age: <input type="text" placeholder={this.props.user.age} value ={this.state.user.age}  onChange={this.ageChange.bind(this)}  ></input></h3>
                <button onClick={this.props.modify.bind(this,this.state.user)}> save</button>
                <h3>Description: {this.props.user.description}</h3>
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
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ modify: modify }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(UserDetail);