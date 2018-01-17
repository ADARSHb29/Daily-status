import React, { Component } from 'react';
import UserList from '../containers/user-list';
import EditUser from '../containers/user-edit';
import AddUser from '../containers/user-add';
import ViewUser from '../containers/user-view';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <div>
                <h2>User List</h2>
                <UserList />
                <hr />
                {this.props.showContent.showContent == 2 ? <div>
                    <EditUser /></div> : null}
                {this.props.showContent.showContent == 1 ? <div>
                    <AddUser /></div> : null}
                {this.props.showContent.showContent == 3 ? <div>
                    <ViewUser /></div> : null}
                {this.props.showContent.showContent == 4 ? <div>
                    Successfully Deleted</div> : null}
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
