import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 1000, pv: 3000,
  },
  {
    name: 'Page B', uv: 6000, pv: 2000,
  },
  {
    name: 'Page C', uv: 10000, pv: 5000,
  },
  {
    name: 'Page D', uv: 8000, pv:1000,
  },
  {
    name: 'Page E', uv: 2500, pv: 3000,
  },
  {
    name: 'Page F', uv: 100, pv:4000,
  },
  {
    name: 'Page G', uv: 3500, pv: 7500,
  },
];

class BarreCharte extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

  render() {
    return (
      <div style={{ width: '80%', height: 500, margin : 50}}>
        <ResponsiveContainer>
          <BarChart
            width={1000}
            height={500}
            data={data}
            margin={{
              top: 0, right: 50, left: 50, bottom: 50,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" stackId="a" fill="#F04E98" />
            <Bar dataKey="uv" stackId="a" fill="#FFCD00" />
          </BarChart>
           </ResponsiveContainer>
      </div>
    );
  }
}

export default BarreCharte;
