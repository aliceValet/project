import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import axios from 'axios';
import _ from 'lodash';


class BarreCharte extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';
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
    const values = [];

    {_.map(this.state.artistList, o =>
      values.push({name : o.Name, uv : o.Followers}) )}
    console.log(values)
    return (
      <div style={{ width: '100%', height: 300, margin : 20}}>
        <ResponsiveContainer>
          <BarChart
            width={10000}
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
            <Bar name ="Followers" dataKey="uv" stackId="a" fill="#74D2E7" />
          </BarChart>
           </ResponsiveContainer>
      </div>
    );
  }
}

export default BarreCharte;
