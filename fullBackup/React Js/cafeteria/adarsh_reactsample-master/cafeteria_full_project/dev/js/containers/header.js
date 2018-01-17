import React, { Component } from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Header extends Component{
    render(){
        return(
            <div>
            <div className="header">
                PHOTON CAFE  
            </div>
            <Link to ="admin-main-page">Admin Page Navigate</Link>
            </div>
        )
    }
}
export {Header};