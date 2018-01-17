import React from 'react';
import UserList from '../containers/user-list';
import EditUser from '../containers/user-edit';
import AddUser from '../containers/user-add';
import ViewUser from '../containers/user-view';

const App = () => (
    <div>
        <h2>User List</h2>
        <UserList />
        <hr />
        <EditUser />
        <AddUser />
        <ViewUser/>
    </div>
);

export default App;
