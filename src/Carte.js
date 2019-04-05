import React, { PureComponent } from 'react';
import {
  ResponsiveContainer
} from 'recharts';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import axios from 'axios';

class Carde extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

  constructor(props){
    super(props);
    this.state = {
      Listenings : null
    }
  }
  componentDidMount(){
    axios.get("http://localhost:3000/tracks/")
    .then(res => {
      this.setState({Listenings : res.data})
    })
  }

  render() {
    return (
      <div style={{ width: '50%', height: 300, margin : 20}}>
        <ResponsiveContainer>
          <Card body inverse style={{ backgroundColor: '#000000', borderColor: '#F04E98' }} className="text-center">
        <CardTitle>Total hours of playing music this week</CardTitle>
        <CardText>65h</CardText>
      </Card>
           </ResponsiveContainer>
      </div>
    );
  }
}

export default Carde;
