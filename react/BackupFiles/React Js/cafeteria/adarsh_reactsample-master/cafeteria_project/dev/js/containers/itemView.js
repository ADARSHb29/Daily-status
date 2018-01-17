import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './style.css';
class ItemView extends Component {
    render() {
        if (!this.props.items) {
            return (<div>Select a Item...</div>);
        }
        return (
            <div>
                <h2>Id:{this.props.items.id}</h2>
                <h2>Item: {this.props.items.item}</h2>
                <h3>Price: {this.props.items.price}</h3>
                <img className="itemImage" src={this.props.items.image} />
                <Link to="/admin-add-items" >back</Link>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        items: state.activeItem
    };
}
export default connect(mapStateToProps)(ItemView);