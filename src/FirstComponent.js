import React from 'react';
import './FirstComponent.css';
import { Table } from 'reactstrap';

import axios from 'axios';
import _ from 'lodash';

class FirstComp extends React.Component {

  state = {
    artistList: []
  }

  componentDidMount(){
     axios.get(`http://localhost:3000/artists/`)
      .then(res => {
        console.log("res.dat", res.data);
          this.setState({ artistList: res.data });
        });

  }
  
  render() {
    return (
    	 <Table hover style={{width:'100%'}}>
        <thead>
          <tr>
            <th>Trending Artists</th>
            <th>Name</th>
            <th>Birthday</th>
            <th>Followers</th>
          </tr>
        </thead>
        <tbody>
        {_.map(this.state.artistList, o =>
          
            <tr>
            <th scope="row">{_.uniqueId()}</th>
            <td>{o.Name}</td>
            <td>{o.Birthday}</td>
            <td>{o.Followers}</td>
          </tr>
          
        )}
          
                </tbody>
      </Table>
    	
    );
  }
}

export default FirstComp;