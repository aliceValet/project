import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class FillForm extends React.Component {
  render() {
    return (
      <Form style={{margin:20}}>
        <FormGroup>
          <Label for="exampleEmail">Your Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email address here" />
        </FormGroup>
        <FormGroup>
          <Label for="SurName">Your info</Label>
          <Input type="text" name="surname" id="NomFam" placeholder="Your Surname" />
        </FormGroup>
        <FormGroup>
          <Input type="text" name="name" id="Prenom" placeholder="Your First Name" />
        </FormGroup>
         <FormGroup>
          <Input type="text" name="birthday" id="BirthDate" placeholder="Enter your birthday : DD/MM/YYYY" />
        </FormGroup>
        <FormGroup>
          <Label for="Expectation">Your Expectations</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Know your favorite artists</option>
            <option>Monitor your consumption of music</option>
            <option>Know your favorite styles</option>
          </Input>
        </FormGroup>
        <FormGroup >
          <Label for="exampleFile">Your Photo</Label>
           <FormText color="muted">
            You can upload a photo for your profile down here.
          </FormText>
          <Input type="file" name="file" id="exampleFile" style={{margin:50}}/>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            I agree that this information is correct and will be stored
          </Label>
        </FormGroup>
        <Button style={{backgroundColor:"#000000", borderColor:"#FFCD00", margin:50}} >Submit</Button>
      </Form>
    );
  }
}

export default FillForm;