import React, { PureComponent } from 'react';
import {
  ResponsiveContainer
} from 'recharts';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import axios from 'axios';
import _ from 'lodash';

class Carde extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

  state = {
    tracksList: [],
    count:0
  }

  componentDidMount(){
     axios.get(`http://localhost:3000/tracks/`)
      .then(res => {
        console.log("res.dat", res.data);
          this.setState({ tracksList: res.data });

        });

  }

  render() {
    {_.map(this.state.tracksList, o =>this.state.count=this.state.count + o.Listenings)}
    return (
      <div style={{ width: '50%', height: 300, margin : 20}}>
        <ResponsiveContainer>
          <Card body inverse style={{ backgroundColor: '#000000', borderColor: '#F04E98' }} className="text-center">
        <CardTitle>Total listenings this week</CardTitle>

        <CardText>
          
          <p>{this.state.count}</p>
        </CardText>
      </Card>
           </ResponsiveContainer>
      </div>
    );
  }
}

export default Carde;
