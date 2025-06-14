import React, { use, useState } from "react";
import Button from "../../common/Button/Button";
import Text from "../../common/Textinput/Text";
import TextInput from "../../common/Textinput2/Textinput";
import './index.css';


export default function About() {


  const [value, setvalue] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  function setCount() {
    setvalue(value + 1);
  }

  function setCount1() {
    setvalue(value - 1);
  }


  const handleSubmit = () => {
    if (firstName && lastName && address && isChecked) {
      console.log("Form submitted with:");
      console.log("First Name:", firstName);
      console.log("Last Name:", lastName);
      console.log("Address:", address);
      console.log("Agreed to Terms:", isChecked);
      alert(`Submitted:\n${firstName} ${lastName}\n${address}`);
    } else {
      alert("Please fill in all fields and agree to the terms.");
    }
  };








  return (
    <div>
      <Button name={"ADD 01"} bgColor={'green'} txtSixe={'18px'} onClick={setCount} />
      <Button name={"Remove 01"} bgColor={'red'} txtSixe={'18px'} onClick={setCount1} />

      <h1>{value}</h1>
      <br /><br /><br />


      <div className="form">
        <h1>Form</h1>
        
        <TextInput placeholder={"First Name"} onChange={(e) => setFirstName(e.target.value)} />
        <TextInput placeholder={"Last Name"} onChange={(e) => setLastName(e.target.value)} />
        <TextInput placeholder={"Address"} onChange={(e) => setAddress(e.target.value)} />


        <div className="checkbox-container">
          <input
            type="checkbox"
            id="agree"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}

          />
          <label htmlFor="agree">I agree to the terms and conditions</label>
        </div>

        <Button name={"Submit"} bgColor={'green'} txtSixe={'18px'} onClick={handleSubmit} />



      </div>




    </div>

  );
}