import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser } from '../actions/index';


class AddDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addUser: {}
        };
    }
    Change(event) {
        let addUser = this.state.addUser;
        let name = event.target.name;
        let value = event.target.value;

        addUser[name] = value;

        this.setState({addUser})
    }

    render() {
        return (
            <div>
                {this.props.showContent.showContent==1 ? <div>
               {/* <form onSubmit={this.props.add.bind(this,this.state.addUser)}>  */}
                    <h3>Add user </h3>
                    Id:<input type="number"  name="id" onChange={this.Change.bind(this)} ></input>
                    First Name : <input type="text"  name="first" onChange={this.Change.bind(this)} ></input>
                    Last Name : <input type="text" name="last" onChange={this.Change.bind(this)}></input>
                    Age : <input type="number" name="age" onChange={this.Change.bind(this)}></input>
                    Description:<input type="text" name="description" onChange={this.Change.bind(this)}></input>
                    Profile Photo : <input type="text" name="thumbnail" onChange={this.Change.bind(this)}></input>
                    <button type="button" onClick={this.props.addUser.bind(this,this.state.addUser)}> save</button>
                {/* </form> */}</div>:null}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        user: state.users,
        showContent:state.showContent
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ addUser: addUser }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(AddDetail);