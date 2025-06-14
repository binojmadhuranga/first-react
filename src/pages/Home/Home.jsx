import React from "react";
import Button from "../../common/Button/Button";
import Text from "../../common/Textinput/Text";
import TextInput from "../../common/Textinput2/Textinput";
import Card from "../../component/Card/card";
import gallery from "../../assets/img1.jpg";



function Home() {
  return (

    <div>
      <h1>Home Page</h1>
      <Button name={"create new"} bgColor={'green'} txtSixe={'18px'} onClick={() => { console.log('this button is clicked') }} />
      <Button name={"Change  "} bgColor={'007bff'} txtSixe={'20px'} onClick={() => alert('hello')} />

      <Text placeholder={"Type Here"} />
      <TextInput placeholder={"Live update text"} onChange={(e) => console.log(e.target.value)} />

      <Card
        title={"Card Title"}
        description={"This is a description of the card. It contains some information about the content of the card."}
        image={gallery} />
      <Card
        title={"Binoj Madhuranga"}
        description={"Hello My name is Binoj."}
        image={gallery} />


      <Card title={"Binoj Madhuranga"}
        description={"Hello My name is Binoj."}
        image={gallery}>

        <Button name={"Comments"} bgColor={'green'} txtSixe={'18px'} onClick={() => { console.log('this button is clicked') }} />
        <Button name={"Like  "} bgColor={'007bff'} txtSixe={'20px'} onClick={() => alert('hello')} />


      </Card>


    </div>





  );
}


export default Home;      