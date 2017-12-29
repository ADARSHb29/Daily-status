import React, { Component } from 'react';
//import {PersonFunction } from './function/funct';
import Header from '../function/header';
import {Personcheck} from '../components/Person/person';
import {Button} from '../components/Buttonn/button'
class App extends Component {
  constructor(props)
  {
    super(props);
    console.log("[app.js]inside constructor");
    this.state = {
      persons: [{ name: "partha", age: 23 ,key:1}, { name: "adarsh", age: 21,key:2}],
      order: "asc",
      showBoolean:false
    };
  }
  componentWillMount(){
    console.log("[app.js]inside componenetwillMount");
  }
  componentDidMount(){
    console.log("[app.js]inside componentDidMount");
  }
 
  even = (index, event) => {
    console.log("asd","event", index,event);
    const { persons } = this.state;
    persons[index].name = event.target.value;
    this.setState({
      persons
    })
  }
  //eventoccured()=>{
  //this.setState={
  // persons:[{name:"karthi",age=21},{name:"tizen",age:21}]
  // }
  //}
  eventoccur = () => {
    // console.log("ad")
    // this.setState({
    //persons:[{name:"Karthi",age:21},{name:"Tizen",age:21}]})
    const person = [...this.state.persons];
    const b = this.state.order;
    console.log("haii")
    const isAsc = (b === "asc");
    person.sort((a, b) => {
      return a.name < b.name ? isAsc ? -1 : 1 : a.name > b.name ? isAsc ? 1 : -1 : 0;
    });
    this.setState({
      persons: person,
      order: isAsc?"desc":"asc"
    })
    console.log(this.setState.order);
  }
  eventage = () => {
    const person = [...this.state.persons];
    const b = this.state.order;
    console.log("haii")
    const isAsc = (b === "asc");
    person.sort((a,b) => {
      return a.age < b.age ? isAsc ? -1 : 1 : a.age > b.age ? isAsc ? 1 : -1 : 0;
    });
    this.setState({
      persons: person,
      order: isAsc?"desc":"asc"
    })
  }
  deleteHandler=(index,event)=>{
    const{persons}=this.state;
    persons.splice(index,1);
    this.setState({persons})
  }
  showHide=()=>{
      const originalValue=this.state.showBoolean;
      this.setState({showBoolean:!originalValue})
      console.log("hai",this.state.showBoolean);
  }
  
  render() {
    console.log("[app.js]inside render");
    return (
      <div>
        <Header/>
        <Button  showhideatb={this.showHide} sortage={this.eventage} sortname={this.eventoccur}/>
        <Personcheck state={this.state} even={this.even} handler={this.deleteHandler}/>
      </div>
    );
  }
}
export default App;
//<div><Person_function name={this.state.persons[0].name} age={this.state.persons[0].age} change={this.hello}/> </div>
//<div><Person_function name={this.state.persons[1].name} age={this.state.persons[1].age}/> </div>