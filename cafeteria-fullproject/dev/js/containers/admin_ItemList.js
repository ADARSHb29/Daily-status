import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AdminselectItem, AdmindeleteItem } from '../actions/index';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class Admin_ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: {}
        };
    }
    itemSelect(item) {
        this.state.newItem = item;
        this.setState({ newItem: this.state.newItem });
    }
    editItem(newItem) {
        this.props.AdminselectItem(newItem);
    }
    addItem() {
    }
    deleteItem(deleteItem) {
        this.props.AdmindeleteItem(deleteItem);
    }
    viewItem(editItem) {
        this.props.AdminselectItem(editItem);
    }
    renderList() {
        return this.props.items.map((item) => {
            return (
                <div key={item.id}>
                    <p><input value={item.id} type="radio" onClick={this.itemSelect.bind(this, item)} >
                    </input>Item.ID: {item.id}, 
                    Item Name: {item.item} , Price: {item.price} </p>
                </div>
            );
        });
    }
    render() {
        return (
            <div>
                <ul>
                    <h1>CAFETERIA FOOD ITEMS</h1>
                    {this.renderList()}
                </ul>
                <div>
                    <ul>
                        <button><Link to='/Add' onClick={this.addItem.bind(this)} >ADD</Link></button>
                        <button><Link to="/Edit" onClick={this.editItem.bind(this, this.state.newItem)}>EDIT</Link>
                        </button>
                        <button><Link to="/View" onClick={this.viewItem.bind(this, this.state.newItem)}>VIEW</Link>
                        </button>
                        <Link to ="/admin-add-items"><button onClick={this.deleteItem.bind(this, this.state.newItem)}>DELETE
                        </button></Link>
                    </ul>
                    <hr />
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        items: state.adminAdd
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ AdminselectItem: AdminselectItem, AdmindeleteItem: AdmindeleteItem }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Admin_ItemList);