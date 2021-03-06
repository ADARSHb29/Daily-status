import React, { Component } from 'react';
import './App.css';
import {PersonFunction} from './function/funct';
import Head from './header/header';

class App extends Component {
  state={
    employee:[
      {name:"partha",key:1,
      age:21,company:"photon",branch:"xyz"},{name:"adarsh",key:2,age:25,company:"photon",branch:"xyz"},{name:"nirmal",key:5,age:56,company:"photon",branch:"xyz"}],order:"asc"};

     change_state_value = () => this.setState({ employee:[
        {name:"parthasarathy",key:4,age:20,company:"photon",branch:"xyz"},{name:"adarsh kumar",key:6,age:21,company:"photon",branch:"xyz"},{name:"nirmal pandi",key:7,age:22,company:"photon",branch:"xyz"}]} ) ;

       

        sortingByName = () => {
          let a = [...this.state.employee];
          let b=(this.state.order);
          if(b=="asc"){
          a.sort( (x,y) => {
          const comp1=x.name;
          const comp2=y.name;
          let comparision = 0;
          if (comp1 > comp2){
          comparision = 1;
          }
          else if(comp1 < comp2){
          comparision = -1;
          }
          return comparision;
          
          
          })
          this.setState({ employee:a,order:"desc"})
          }
          
          
          if(b=="desc"){
          a.sort( (x,y) => {
          const comp1=x.name;
          const comp2=y.name;
          let comparision = 0;
          if (comp1 < comp2){
          comparision = 1;
          }
          else if(comp1 > comp2){
          comparision = -1;
          }
          return comparision;
          
          
          })         
          this.setState({ employee:a,order:"asc"})
          }
          
          
          }
          
          sortingByAge = () => {
          let a = [...this.state.employee];
          
          let b=(this.state.order);

          if(b=="asc"){
          a.sort( (x,y) => {
          const comp1=x.age;
          const comp2=y.age;
          let comparision = 0;
          if (comp1 > comp2){
          comparision = 1;
          }
          else if(comp1 < comp2){
          comparision = -1;
          }
          return comparision;
          
          
          })
          console.log(a);
          
          this.setState({ employee:a,order:"desc"})
          }
          
          
          if(b=="desc"){
          a.sort( (x,y) => {
          const comp1=x.age;
          const comp2=y.age;
          let comparision = 0;
          if (comp1 < comp2){
          comparision = 1;
          }
          else if(comp1 > comp2){
          comparision = -1;
          }
          return comparision;
          
          
          })
          console.log(a);
          
          this.setState({ employee:a,order:"asc"})
          }
          
          
          }

   render() {
  const persons = this.state.employee.map((n)=>{
    return (<PersonFunction {...n}/>);
  });
    return (
      <div className="App">
          <Head />
          <button  onClick={this.change_state_value} >change state value</button>
          <button  onClick={this.sortingByName} >Sort Name</button>
          <button onClick={this.sortingByAge} >Sort age</button>
          <div className="middle-content">
             {persons}
          </div>
                   
      </div>

    );
  }
}

export default App;
