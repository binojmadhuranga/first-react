import React from "react";
import Button from "../../common/Button/Button";
import Text from "../../common/Textinput/Text";

function Home() {
  return (

    <div>
      <h1>Home Page</h1>
      <Button name={"create new"} bgColor={'green'} txtSixe={'18px'}/>
      <Button name={"Change  "} bgColor={'007bff'} txtSixe={'20px'} />
       <Text placeholder={"Type Here"} />
    </div>
    
    
  );
}


export default Home;      