import React, { Component } from 'react';
class Sample extends Component{
    componentWillMount() {
        console.log('sample-Component WILL MOUNT!')
     }
     componentDidMount() {
        console.log('sample-Component DID MOUNT!')
     }
     componentWillReceiveProps(newProps) {    
        console.log('sample-Component WILL RECIEVE PROPS!')
     }
     shouldComponentUpdate(newProps, newState) {
         console.log("sample-should component update");
        return true;
     }
     componentWillUpdate(nextProps, nextState) {
        console.log('sample-Component WILL UPDATE!');
     }
     componentDidUpdate(prevProps, prevState) {
        console.log('sample-Component DID UPDATE!')
     }
    render(){
        const{textbox}=this.props;
        return(
            <div>
                <h2>Changed textbox value is {textbox}</h2>
            </div>
        );
    }
}
export default  Sample;