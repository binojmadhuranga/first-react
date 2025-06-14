import React from 'react';
import './style.css'; 

export default function Button({name,bgColor,txtSixe}) {

  // Function 

 return (
    <button className='btn' style={{backgroundColor: bgColor, fontSize: txtSixe}}>{name}</button>
 )
}