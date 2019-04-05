import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './FillForm.css';
import NavBarre from './NavBarre';
import TableCompo from './TableComp';
import Formul from "./Formulaire";

class FillForm extends React.Component {
  render() {
    return (
      <div className="filling">
      <NavBarre/>
      <Formul/>
      
      <TableCompo/>
      </div>
    );
  }
}

export default FillForm;