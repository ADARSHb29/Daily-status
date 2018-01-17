import React from 'react';
import './funct.css';      
 export const PersonFunction=(propss) =>{
     const {name,age,...args} = propss;
     const {company}=args;
     return(
         
         <div>
             Employee {name} and Employee {age} - {company}
         </div>

     );
 }
 
