import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './FillForm.css';
import NavBarre from './NavBarre';


class FillForm extends React.Component {
  render() {
    return (
      <div className="filling">
      <NavBarre/>
      <Form style={{backgroundColor: "100",margin:20}}>
        <FormGroup>
          <Label for="SurName">Add a new artist</Label>
          <Input type="text" name="surname" id="NomFam" placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <Input type="text" name="name" id="Prenom" placeholder="Name of the Album" />
        </FormGroup>
         <FormGroup>
          <Input type="text" name="birthday" id="BirthDate" placeholder="Date of realease : YYYY" />
        </FormGroup>
        <FormGroup >
          <Label for="exampleFile">Album Cover Photo</Label>
           <FormText color="muted">
            You can upload the photo of the album you want to add down here.
          </FormText>
          <Input type="file" name="file" id="exampleFile" style={{margin:50}}/>
        </FormGroup>
        <FormGroup>
          <Label for="Expectation">Tracks</Label>
          <FormText color="muted" style={{margin : 10}}>
            How many tracks do you want to import from this album ?
          </FormText>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>

          </Input>
        </FormGroup>
        <FormGroup>
          <Input type="text" name="TrackTitle" id="TrackTit" placeholder="Title" />
        </FormGroup>
        
        
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            I want all these tracks imported at once.
          </Label>
        </FormGroup>
        <Button style={{backgroundColor:"#000000", borderColor:"#FFCD00", margin:50}} >Submit</Button>
      </Form>
      </div>
    );
  }
}

export default FillForm;