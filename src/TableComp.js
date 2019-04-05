import React from 'react';
import './TableComp.css';
import { Table } from 'reactstrap';
import axios from 'axios';


class TableCompo extends React.Component {
  constructor(props){
    super(props);
    this.state={
      Name : "",
      Birthday:0,
      Followers:0
    }

  }
  componentDidMount(){
    axios.get('http://localhost:3000/artists/')
     .then(res => {
        const artists = res.data;
        this.setState({ artists });
      })
    .catch(error =>{
        console.log(error);
      });
  }
  render() {
    const artists = this.state;
    return (
    	 <Table hover style={{width:'100%'}}>
        <thead>
          <tr>
            <th>Artists</th>
            <th>Birthday</th>
            <th>Followers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">NF</th>
            <td>1980</td>
            <td>2000</td>
          </tr>
          <tr>
            <th scope="row">MJ</th>
            <td>1959</td>
            <td>3000</td>
          </tr>
        </tbody>
      </Table>
    	
    );
  }
}

export default TableCompo;