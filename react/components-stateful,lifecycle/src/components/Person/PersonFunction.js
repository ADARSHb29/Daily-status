import React, { Component } from 'react'
import  './personstyle.css'
//export let Hello=(a)=>{
  //      return (
    //    <div>
      //      <h1>Haii</h1>
        //    <p>{a.name}</p>
         //</div>
    //); 
//};
export class PersonFunction extends Component{
     constructor(propss){
         super(propss);
         console.log("[personFunction.js] inside constructor");
     }
     componentWillMount(){
         console.log("[personFunction.js] inside componentWillmount");
     }
     componentDidMount(){
         console.log("[personFunction.js] inside componentDidmount");
     }
    render(){
        console.log("[personFunction] inside render");
        const {name,age} = this.props;
        console.log(this.props);
        return(
            <div>
            <p onClick={this.props.clickpara} className="textcontent">Employee {name} and Age {age} and children {this.props.children}</p>
            <div><input type="text" onChange={this.props.clicktext}/> </div>
            </div>
        );
    }
}
// export const PersonFunction=(propss) =>{
    
// }
//export const obj=[{name:"adarsh",age:21},{name:"Partha",age:21}];