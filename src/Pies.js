import React, { PureComponent } from 'react';
import {
  ResponsiveContainer, PieChart, Pie, Legend, Sector, Cell,
} from 'recharts';
import './Pies.css'
const data = [
  { name: 'RnB', value: 20 }, { name: 'Pop', value: 50 },
  { name: 'Rap', value: 30 }, { name: 'Classical', value: 10 },
];
const COLORS = ['#F04E98', '#74D2E7', '#B0008E', '#FFCD00'];


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