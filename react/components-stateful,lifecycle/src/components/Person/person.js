import React, { Component } from 'react'
import { PersonFunction } from './PersonFunction'


class Personcheck extends Component{ 
    constructor(props){
        super(props);
        console.log("[person.js] inside Personcheck constructor");
    }
    componentWillMount(){
        console.log("[person.js] inside component willmount");
    }
    componentDidMount(){
        console.log("[person.js] inside componentDidmount");
    }
    render()
    {
        console.log("[person.js] inside render");
        let person = null;
        if (this.props.state.showBoolean) {
            return this.props.state.persons.map((n, index) => {
                return (<PersonFunction {...n} clicktext={this.props.even.bind(this, index)} clickpara={this.props.handler.bind(this, index)}>hai</PersonFunction>);
            }); 
        }
        else{
            return null;
        }
    }}
export {Personcheck};