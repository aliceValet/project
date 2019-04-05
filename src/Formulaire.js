import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Formulaire.css';
import axios from 'axios';

class Formul extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name:"",
      Birthday : null,
      Followers : 0
    };

    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('An artist was submitted, called ' + this.state.Name + " born " + this.state.Birthday + " followed by " + this.state.Followers + " followers.");
    event.preventDefault();
    axios.put('http://localhost:3000/artists/', {...this.state});
  }
  render() {
    return (
      <Form style={{backgroundColor: "100",margin:20}} onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="SurName">Add a new artist</Label>
          <Input type="text" name="name" id="NomFam" placeholder="Name" value={this.state.Name} onChange={e => this.setState ({'Name' : e.target.value})}/>
        </FormGroup>
        <FormGroup>
          <Input type="text" name="nbfollowers" id="Followers" placeholder="His/her number of followers" value={this.state.Followers} onChange={e => this.setState ({'Followers' : e.target.value})}/>
        </FormGroup>
        <FormText color="muted" style={{margin : 10}}>
           The artist's birth date.
          </FormText>
         <FormGroup>
          <Input type="date" name="birthday" id="BirthDate" placeholder="Birthday" value={this.state.Birthday} onChange={e => this.setState ({'Birthday' : e.target.value})} />
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


