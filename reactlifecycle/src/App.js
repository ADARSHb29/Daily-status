import React, { Component } from 'react';
import './App.css';
import Sample from './Sample.js'
class App extends Component {
  state={
      text:""
  }
  textChange(event){
    this.setState({
      text:event.target.value
    })
  }
  componentWillMount(){
    console.log("inside component will mount");
  }
  componentDidMount(){
    console.log("inside didmount");
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.textChange.bind(this)}></input>
        <Sample textbox={this.state.text}/>
      </div>
    );
  }
}
export default App;