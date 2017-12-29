import React from 'react'
export const Button=(props)=>{
    return (
    <div><button onClick={props.showhideatb}>ShowHide</button>
    <span><button onClick={props.sortage}>SortByName</button></span>
    <span><button onClick={props.sortname}>SortByAge</button></span>
    </div>);
}