import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userLogging } from '../actions/index';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Header } from './header';
import './style.css';
export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginUser: {}
        };
    }
    onChangeHandler(event) {
        const loginUser = this.state.loginUser;
        const name = event.target.name;
        const value = event.target.value;
        loginUser[name] = value;
        this.setState({ loginUser })
    }
    enterKeyHandling(event) {
        if (event.keyCode === 13) {
            const form = event.target.form;
            const index = Array.prototype.indexOf.call(form, event.target);
            form.elements[index + 1].focus();
            event.preventDefault();
        }
    }
    componentDidMount() {
        this.refPhone.focus();
    }
    render() {
        console.log('hi');
        return (
            <div className="bgColor">
                <Header />
                <form>
                    <h1 className="marginLogin">LOGIN </h1>
                    <p className="marginPhone">Phone Number :<input className="phoneInput" type="number"
                        name="phone" onKeyDown={this.enterKeyHandling} onChange={this.onChangeHandler.bind(this)}
                        ref={(input) => { this.refPhone = input; }} ></input></p>
                    <p className="marginName">Name : <input className="nameInput" type="text" name="name"
                        onKeyDown={this.enterKeyHandling}
                        onChange={this.onChangeHandler.bind(this)} ></input></p>
                    <Link to="/item-List"> <button className="marginLoginBtn" type="button"
                        onClick={this.props.userLogging.bind(this, this.state.loginUser)}>Login</button></Link>
                </form>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.users
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ userLogging: userLogging }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Login);
