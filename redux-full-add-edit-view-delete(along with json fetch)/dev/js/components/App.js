import React,{ Component } from 'react';
import UserList from '../containers/user-list';
import EditUser from '../containers/user-edit';
import AddUser from '../containers/user-add';
import ViewUser from '../containers/user-view';
import { connect } from 'react-redux';

class App extends Component{
    render(){
        return (
            <div>
            <h2>User List</h2>
            <UserList />
            <hr />
            {this.props.showContent.showContent==1?<AddUser />:null}
            {this.props.showContent.showContent == 2 ?<EditUser />:null}
            {this.props.showContent.showContent == 3?<ViewUser/>:null}
            </div>

        );
    }
  
}
function mapStateToProps(state) {
    return {
        showContent:state.showContent
    };
}
export default connect(mapStateToProps)(App);
