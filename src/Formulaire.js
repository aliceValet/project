import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Formulaire.css';

class Formul extends React.Component {
  render() {
    return (
      <Form style={{backgroundColor: "100",margin:20}}>
        <FormGroup>
          <Label for="SurName">Add a new artist</Label>
          <Input type="text" name="Name" id="NomFam" placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <Input type="text" name="nbfollowers" id="Followers" placeholder="His/her number of followers" />
        </FormGroup>
        <FormText color="muted" style={{margin : 10}}>
           The artist's birth date.
          </FormText>
         <FormGroup>
          <Input type="date" name="birthday" id="BirthDate" placeholder="Birthday" />
        </FormGroup>
        <FormGroup >
          <Label for="exampleFile">Album Cover Photo</Label>
           <FormText color="muted">
            You can upload the photo of the album you want to add down here.
          </FormText>
          <Input type="file" name="file" id="exampleFile" style={{margin:50}}/>
        </FormGroup>
        
        <Button style={{backgroundColor:"#000000", borderColor:"#FFCD00"}} >Submit</Button>
      </Form>
    );
  }
}

export default Formul;


