import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AdminaddItems } from '../actions/index';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

export class ItemAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addItem: {}
        };
    }
    Change(event) {
        let addItem= this.state.addItem;
        let name = event.target.name;
        let value = event.target.value;

        addItem[name] = value;
        this.setState({addItem})
    }

    render() {
        return (
            <div>
               
                    <h2>Add Item </h2>
                    <p>Id:<input type="text"  name="id" onChange={this.Change.bind(this)} ></input></p>
                    <p>Item Name:<input type="text"  name="item" onChange={this.Change.bind(this)} >
                    </input></p>
                    <p>Price : <input type="text"  name="price" onChange={this.Change.bind(this)} >
                    </input></p>
                    <p>Item Image: <input type="text" name="image" onChange={this.Change.bind(this)}>
                    </input></p>
                    <button type="button" onClick={this.props.AdminaddItems.bind(this,this.state.addItem)}>
                    <Link to ="/admin-add-items" >Save</Link></button>
                {/* </form> */}
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
    return bindActionCreators({ AdminaddItems: AdminaddItems }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(ItemAdd);