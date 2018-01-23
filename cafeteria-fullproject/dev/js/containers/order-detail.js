import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { store } from '../index';
import '../components/admin.css';
/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */
class Order_detail extends Component {
    componentDidMount() {
        const value = fetch('http://localhost:3001/Orders/' + this.props.match.params.id).then(
            data =>
                ({
                    type: "ORDERED_ITEM",
                    payload: data.json()
                }),
            error => console.log("IIIIIIIIIIIIIIIII",error));
                console.log("vvvvvvvvvvvvvvvvvvvvv",value);
        store.dispatch(
            value
        );
    };
    TableRow(row) {
        console.log(row);
        return (
            
               
            <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.item}</td>
                <td><img className="img_size" src={row.image}/></td>
                <td>{row.price}</td>
                 <td>{row.quantity}</td>
            </tr>
            
        )
    };

    Table(items) {
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

    render() {
        if (!this.props.item) {
            return (<div>Select a order...</div>);
        }
        return (
            <div>
                 <div>
            <header>
                    <div className="title">Photon Cafe</div>
                        <div className="Admin_name">Admin Name:Sundaram</div>
                    </header>
                <div className="sub-title">List of Items</div>
                </div>
                <h2>USERNAME:{this.props.item.name}</h2>
                <h2>QUANTITY: {this.props.item.Totalquantity}</h2>
                <h2>TOTALAMOUNT: {this.props.item.totalAmount}</h2>
                {this.Table(this.props.item.Orderitems)}
              

            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        item: state.orderItem
    };
}

export default connect(mapStateToProps)(Order_detail);
