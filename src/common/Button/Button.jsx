import React from 'react';
import './style.css'; 

export default function Button({name,bgColor,txtSixe,onClick}) {

  // Function

//   function handleClick() {
//    onClick();

//   }

  


 return (
    <button className='btn' style={{backgroundColor: bgColor, fontSize: txtSixe}} onClick={onClick}>{name}</button>
 )
}