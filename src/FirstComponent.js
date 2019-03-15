import React from 'react';
import './FirstComponent.css';
import { Table } from 'reactstrap';


class FirstComp extends React.Component {
  
  render() {
    return (
    	 <Table hover style={{width:'100%'}}>
        <thead>
          <tr>
            <th>Trending Artists</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Hit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Nate</td>
            <td>Feuerstein</td>
            <td>Outcast</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Destinys</td>
            <td>Child</td>
            <td>Survivor</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Calum</td>
            <td>Scott</td>
            <td>What I Miss Most</td>
          </tr>
        </tbody>
      </Table>
    	
    );
  }
}

export default FirstComp;