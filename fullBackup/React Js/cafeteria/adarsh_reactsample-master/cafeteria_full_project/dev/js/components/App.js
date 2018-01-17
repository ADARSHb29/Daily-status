import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Cart_page from '../containers/Cart_page';
import Login from '../containers/UserLogin';
import ItemList from '../containers/itemList';
import Order_detail from '../containers/order-detail';
import OrderList from '../containers/order-list';
import Admin_ItemList from '../containers/admin_ItemList';
import ItemAdd from '../containers/itemAdd';
import ItemEdit from '../containers/itemEdit';
import ItemView from '../containers/itemView';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route exact path="/" component={Login} />
                        <Route path="/item-List" component={ItemList} />
                        <Route path="/food-cart-page" component={Cart_page} />
                        <Route path="/admin-main-page" component={OrderList} />
                        <Route path="/admin-view/:id" component={Order_detail} />  
                        <Route path="/admin-add-items" component={Admin_ItemList} />
                        <Route path="/Add" component={ItemAdd} />
                        <Route path="/Edit" component={ItemEdit} />
                        <Route path="/View" component={ItemView} />
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
