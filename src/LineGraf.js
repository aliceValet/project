import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: '00h', uv: 0, pv: 0,
  },
  {
    name: '3h', uv: 0, pv: 0,
  },
  {
    name: '6h', uv: 30, pv: 50,
  },
  {
    name: '9h', uv: 10, pv: 20, 
  },
  {
    name: '12h', uv: 0, pv: 0, 
  },
  {
    name: '15h', uv: 0, pv: 0, 
  },
  {
    name: '18h', uv: 0, pv: 50, 
  },
  {
    name: '21h', uv: 40, pv: 100, 
  },
  {
    name: '00h', uv: 20, pv: 50, 
  },
];

class LineGraph extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return ( 
      <div style={{ width: '100%', height: 300, margin : 20}}>
        <ResponsiveContainer>
      
      <LineChart
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
        <Line name="Winter" type="monotone" dataKey="pv" stroke="#B0008E" activeDot={{ r: 8 }} />
        <Line name="Summer" type="monotone" dataKey="uv" stroke="#FFCD00" />
      </LineChart>
      </ResponsiveContainer>
      </div>
    );
  }
}
export default LineGraph;
