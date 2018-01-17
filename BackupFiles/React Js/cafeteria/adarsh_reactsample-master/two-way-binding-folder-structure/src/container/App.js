import React, { Component } from 'react';
import './App.css';
import Persons from '../component/person/person';
import Head from '../component/header/header';
import Button from '../component/Button/button'

class App extends Component {
  state = {
    employee: [
      {
        name: "partha", key: 1, age: 21, company: "photon", branch: "xyz"
      }, {
        name: "adarsh", key: 2, age: 25, company: "photon", branch: "xyz"
      }, {
        name: "nirmal", key: 5, age: 56, company: "photon", branch: "xyz"
      }],
    order: "asc",
    showContent: true
  };



  change_state_value = (a, b) => this.setState({
    employee: [
      { name: a, key: 4, age: 20, company: "photon", branch: "xyz" },
      { name: b, key: 6, age: 21, company: "photon", branch: "xyz" },
      { name: "nirmal pandi", key: 7, age: 22, company: "photon", branch: "xyz" }]
  });



  sortingByName = (selecting) => {
    const { employee, order } = this.state;
    const value = (order === 'asc') ? [1, -1, 'desc'] : [-1, 1, 'asc'];

    employee.sort((x, y) => {
      const a = (selecting === "name") ? x.name : x.age;
      const b = (selecting === "name") ? y.name : y.age;
      return b > a ? value[0] : b < a ? value[1] : 0;
    });

    this.setState({ employee, order: value[2] });
  }



  twoWayBinding = (index, event) => {
    const { employee } = this.state;
    employee[index].name = event.target.value;
    this.setState({
      employee
    });
  }


  toggleShowHide = () => {
    const data = this.state.showContent;
    this.setState({ showContent: !data })
  }


  render() {
    return (
      <div className="App">
        <Head />
        <Button state={this.change_state_value} sorting={this.sortingByName}
          Showcontent={this.state.showContent} Toggle={this.toggleShowHide} />
        {this.state.showContent ?
          <div className="middle-content">
            <Persons employee={this.state.employee} binding={this.twoWayBinding} />
          </div> : null
        }

      </div>

    );
  }
}

export default App;
