import React from 'react';
import UserList from '../containers/user-list';
import ViewDetails from '../containers/user-detail';
import AddDetails from '../containers/user-add';
import EditDetails from '../containers/user-edit';
const App = () => (
    <div>
        <h2>User List</h2>
        <UserList />
        <hr />
        <AddDetails/>
        <EditDetails/>
        <ViewDetails />
    </div>
);

export default App;
