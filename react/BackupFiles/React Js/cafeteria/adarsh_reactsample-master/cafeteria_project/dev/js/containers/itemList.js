import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../App.css';
import { cartItems } from '../actions/index';
import Header from './second-page-header';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class ItemList extends Component {

    constructor(props) {
        super(props);
        this.state = {  order: {} };


    }
    change(iterator,event) {
        this.setState({
        order: {
            item: iterator.item,
            quantity: event.target.value,
            price: iterator.price,
            image: iterator.image,
            id: iterator.id
        }
    });
    }

    click() {
        this.props.cartItems(this.state.order);

    }


    TableRow(row){
        return (
        <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.item}</td>
            <td><img src={row.image} className="image" /></td>
            <td>{row.price}</td>
            <td><input type="number" name="quantity" placeholder="Quantity please...!" onChange={this.change.bind(this,row)} min="0" />
                <button onClick={this.click.bind(this)}>ADD TO CART</button></td>
        </tr>
        );
    };

    Table(items){

        
        return (<table>
            <th>S.no</th>
            <th>Food-Items</th>
            <th></th>
            <th>Price</th>
            <th>Quantity</th>
            {items.map(row => {
                return this.TableRow(row);
            })}
        </table>);
    };

    totalQuantity() {

        if (this.props.cart.length === 0) {
            console.log("empty");
        }
        else {

            const totalQuantity = this.props.cart.map((iterator) => {
                return iterator.quantity;
            });
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            const totalQy = totalQuantity.map(Number);
            const final = totalQy.reduce(reducer);

            return (<div>
                <h1 className="totalquantity">
                    <Link to ="food-cart-page" >Total Quantity:{final}</Link></h1>
            </div>)

        }
    }
    render() {


        const { cart } = this.props;

        const { items } = this.props;
        return (<div>
            <Header></Header>
            {this.totalQuantity()}
            {this.Table(items)}

        </div>
        );
    }
}




function matchDispatchToProps(dispatch) {
    return bindActionCreators({ cartItems: cartItems }, dispatch);
}

function mapStateToProps(state) {
    return {
        items:state.adminAdd,
        cart: state.itemsSelected
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(ItemList);