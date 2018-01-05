import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modify } from '../actions/index'
import { bindActionCreators } from 'redux';
/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */
class UserDetail extends Component {
    // reffun=()=>{
    //     var a=this.refs.modifiedval;
    //     console.log(a);
    // }
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
        // this.handleAgeChange = this.handleAgeChange.bind(this);
    }

    handleAgeChange(event) {
        this.state.user.age = event.target.value;
        this.setState({ user: this.state.user });
    }

    componentWillReceiveProps(nextProps) {
        console.log("inside will receive props");
        this.setState({
            user: {
                firstname: nextProps.user.firstname,
                lastname: nextProps.user.lastname,
                age: nextProps.user.age,
                description: nextProps.user.description,
                id: nextProps.user.id,
                thumbnail: nextProps.user.thumbnail
            }
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("inside should update");

        return true;
    }
    componentWillUpdate() {
        console.log("inside component will update");
    }
    componentDidMount() {
        console.log("inside component did mount");
    }
    render() {
        console.log("inside render");
        if (!this.props.user) {
            return (<div>Select a user...</div>);
        }
        return (
            <div>
                <img src={this.props.user.thumbnail} />
                <h2>{this.props.user.firstname} {this.props.user.lastname}</h2>
                <h3>Age:{this.props.user.age}</h3>
                <h3>Description:{this.props.user.description}</h3>
            </div>
        );
    }
}
// <button type="button" onClick={()=>this.props.modage(user,this.refs.modifiedval)}>Changeage</button>
//<button type="button" onClick={this.reffun}>Changeage</button>
//<button type="button" onClick={this.props.modify.bind(this, this.state.user)}>Click to age</button>
//<input type="text" placeholder={this.props.user.age} onChange={this.handleAgeChange.bind(this)} />
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
