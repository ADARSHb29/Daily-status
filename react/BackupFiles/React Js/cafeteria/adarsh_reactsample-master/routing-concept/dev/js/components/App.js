import React, { Component } from 'react';
import UserList from '../containers/user-list';
import EditUser from '../containers/user-edit';
import AddUser from '../containers/user-add';
import ViewUser from '../containers/user-view';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Add from '../containers/user-add';
import Edit from '../containers/user-edit';
import View from '../containers/user-view';
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route exact path="/" component={UserList} />
                        <Route path="/add" component={Add} />
                        <Route  path="/edit/:id" component={Edit} />
                        <Route path="/view/:id" component={View} />
                    </div>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        showContent: state.showContent
    };
}

export default connect(mapStateToProps)(App);
