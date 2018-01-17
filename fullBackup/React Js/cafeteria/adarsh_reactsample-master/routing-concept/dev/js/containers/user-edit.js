import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { modifyUser } from '../actions/index';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {store} from '../index';


class UserDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: this.props.user
        };
    }

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
    ageChange(event) {
        this.state.newUser.age = event.target.value;
        this.setState({ newUser: this.state.newUser });
    }

    descriptionChange(event) {
        this.state.newUser.description = event.target.value;
        this.setState({ newUser: this.state.newUser });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user) {
            this.setState({
                newUser: {
                    first: nextProps.user.first,
                    last: nextProps.user.last,
                    thumbnail: nextProps.user.thumbnail,
                    id: nextProps.user.id
                }
            });
        }
    }

    render() {


        if (!this.props.user) {
            return (
                    <div> <h2>User Details</h2> Select a user...</div>);
        }
        return (
            <div>
    
                    <h2>User Details</h2>
                    <img src={this.props.user.thumbnail} />
                    <h2>{this.props.user.first} {this.props.user.last}</h2>
                    <h3>Age: <input type="text" value={this.state.newUser.age} onChange={this.ageChange.bind(this)}></input></h3>
                    <h3>Description: <input type="text" value={this.state.newUser.description} onChange={this.descriptionChange.bind(this)}></input></h3>
                    <button onClick={this.props.modifyUser.bind(this, this.state.newUser)}> save</button>
                    <Link to="/" >Back</Link>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ modifyUser: modifyUser }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(UserDetail);