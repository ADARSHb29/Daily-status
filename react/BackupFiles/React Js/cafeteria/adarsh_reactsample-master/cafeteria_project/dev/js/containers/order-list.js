import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../components/admin.css';

class OrderList extends Component {
    render() {
        console.log("user-list");
        return (
            <div>
                <header>
                    <div className="title">Photon Cafe</div>
                        <div className="Admin_name"><Link to ="admin-add-items">Add Items</Link></div>
                    </header>
                <div className="sub-title">List of orders</div>
              
                    <table>

                        <th>S.NO</th>
                        <th>NAME</th>
                        <th>TotalAmount</th>
                        <th>Totalquantity</th>
                        <th>VIEW</th>



                        {this.props.item.map((order) => {
                            return (


                                <tr>
                                    <td>{order.id}</td>
                                    <td>{order.name}</td>
                                    <td>{order.totalAmount}</td>
                                    <td>{order.Totalquantity}</td>
                                    <td>{<Link to={`/admin-view/${order.id}`}> <button className="view-buttuon" > view  </button></Link>}</td>
                                </tr>




                            );
                        })}
                    </table>
               

            </div>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        item: state.adminItem
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser


// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps)(OrderList);