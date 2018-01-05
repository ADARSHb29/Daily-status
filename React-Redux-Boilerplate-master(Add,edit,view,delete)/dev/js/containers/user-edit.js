import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { modifyUser } from '../actions/index';


class UserDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: {},
        };
    }
    ageChange(event) {
        this.state.newUser.age = event.target.value;
        this.setState({ newUser: this.state.newUser });
    }

    descriptionChange(event) {
        this.state.newUser.description= event.target.value;
        this.setState({ newUser: this.state.newUser });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user) {
            this.setState({
                newUser: {
                    first: nextProps.user.first,
                    last: nextProps.user.last,
                    age: nextProps.user.age,
                    thumbnail: nextProps.user.thumbnail,
                    description: nextProps.user.description,
                    id: nextProps.user.id
                }
            });
        }
    }

    render() {
        console.log("inside edit render");

        if (!this.props.user) {
            return (<div>
                {this.props.showContent.showContent == 2 ?
                    <div> <h2>User Details</h2> Select a user...</div> : null}</div>);
        }
        return (
            <div>
                {this.props.showContent.showContent == 2 ? <div>
                    
                    <img src={this.props.user.thumbnail} />
                    <h2>{this.props.user.first} {this.props.user.last}</h2>
                    <h3>Age: <input type="text" value={this.state.newUser.age} onChange={this.ageChange.bind(this)}></input></h3>
                    <h3>Description: <input type="text" value={this.state.newUser.description} onChange={this.descriptionChange.bind(this)}></input></h3>
                    <button onClick={this.props.modifyUser.bind(this, this.state.newUser)}> save</button>
                </div> : null}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.activeUser,
        showContent: state.showContent
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ modifyUser: modifyUser }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(UserDetail);