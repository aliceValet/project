import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 1, pv: 3,
  },
  {
    name: 'Page B', uv: 6, pv: 2,
  },
  {
    name: 'Page C', uv: 10, pv: 5,
  },
  {
    name: 'Page D', uv: 8, pv:1,
  },
  {
    name: 'Page E', uv: 2, pv: 3,
  },
  {
    name: 'Page F', uv: 1, pv:4,
  },
  {
    name: 'Page G', uv: 3, pv: 7,
  },
];

class BarreCharte extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

  render() {
    return (
      <div style={{ width: '100%', height: 300, margin : 20}}>
        <ResponsiveContainer>
          <BarChart
            width={10000}
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
            <Bar name ="Playlists" dataKey="pv" stackId="a" fill="#F04E98" />
            <Bar name ="Personal search" dataKey="uv" stackId="a" fill="#FFCD00" />
          </BarChart>
           </ResponsiveContainer>
      </div>
    );
  }
}

export default BarreCharte;
