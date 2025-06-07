import React from "react";
import Button from "../../common/Button/Button";
import Text from "../../common/Textinput/Text";

function Home() {
  return (

    <div>
      <h1>Home Page</h1>
      <Button name={"create new "}/>
      <Button name={"Change  "}/>
       <Text placeholder={"Type Here"} />
    </div>
    
    
  );
}


export default Home;      