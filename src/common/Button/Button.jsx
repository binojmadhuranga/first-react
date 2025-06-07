import React from 'react';
import './style.css'; 

export default function Button({name}) {
 return (
    <button className='btn'>{name}</button>
 )
}