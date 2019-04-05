import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import axios from 'axios';
import _ from 'lodash';

class LineGraph extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
   state = {
    tracksList: []
  }


  componentDidMount(){
     axios.get(`http://localhost:3000/tracks/`)
      .then(res => {
        console.log("res.dat", res.data);
          this.setState({ tracksList: res.data });
        });

  }

  render() {
    const values = [];

    {_.map(this.state.tracksList, o =>
      values.push({name : o.Duration, pv : o.Listenings}) )}
    console.log(values)
    return ( 
      <div style={{ width: '100%', height: 300, margin : 20}}>
        <ResponsiveContainer>
      
      <LineChart
        width={1000}
        height={500}
        data={values}
        margin={{
          top: 0, right: 50, left: 50, bottom: 50,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line name="Nb of Listenings according to the Duration" type="monotone" dataKey="pv" stroke="#B0008E" activeDot={{ r: 8 }} />
      </LineChart>
      </ResponsiveContainer>
      </div>
    );
  }
}
export default LineGraph;
