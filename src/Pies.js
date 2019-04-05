import React, { PureComponent } from 'react';
import {
  ResponsiveContainer, PieChart, Pie, Legend, Sector, Cell,
} from 'recharts';
import './Pies.css'

import axios from 'axios';
import _ from 'lodash';
const COLORS = ['#F04E98', '#74D2E7', '#B0008E', '#FFCD00'];
const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];


class PieCharte extends PureComponent {
  static jsfiddleUrl = '//jsfiddle.net/alidingling/6okmehja/';

  

  render() {
    return (
      <div style={{ width: '100%', height: 300, margin : 0}}>
        <ResponsiveContainer>
          <PieChart onMouseEnter={this.onPieEnter}>
          <Legend/>
        <Pie
          data={data}
          innerRadius={80}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label={true}
          labelLine={true}

        >
          {
          data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default PieCharte;