import React, { Component } from 'react';
import './second-page-header.css';
import { connect } from 'react-redux';
class Header extends Component {

    render() {

        return (
            <div className="header_body">
                <div className="display_heading">Photon Cafe</div>
                <div className="display_user">Name:{this.props.users[0].name}</div>
            </div>

        );
    }
}
function mapStatetoProps(state) {
    return {
        users: state.users,
        itemsSelected:state.itemsSelected
    }
}
export default connect(mapStatetoProps)(Header);