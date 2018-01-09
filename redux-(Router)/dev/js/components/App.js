import React, { Component } from 'react';
import UserList from '../containers/user-list';
import EditUser from '../containers/user-edit';
import AddUser from '../containers/user-add';
import ViewUser from '../containers/user-view';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
class App extends Component {
    render() {
        return (
            <Router>
            <div>
                <h2>User List</h2>
               
                {/* <UserList /> */}
                        <Route exact path="/" component={UserList} />
                        <Route path="/add" component={AddUser} />
                        <Route path="/edit" component={EditUser} />
                        <Route path="/view" component={ViewUser} />
               
                {/* {this.props.showContent.showContent == 1 ? <AddUser /> : null}
                {this.props.showContent.showContent == 2 ? <EditUser /> : null}
                {this.props.showContent.showContent == 3 ? <ViewUser /> : null} */}
            </div>
            </Router>


        );
    }

}
function mapStateToProps(state) {
    return {
        showContent: state.showContent
    };
}
export default connect(mapStateToProps)(App);
