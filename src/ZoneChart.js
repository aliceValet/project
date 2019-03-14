import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'Mon', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Tue', uv: 3000, pv: 1000, amt: 5000,
  },
  {
    name: 'Wed', uv: 2000, pv: 6000, amt: 3000,
  },
  {
    name: 'Thu', uv: 5000, pv: 2000, amt: 2000,
  },
  {
    name: 'Fri', uv: 1000, pv: 6000, amt: 1000,
  },
  {
    name: 'Sat', uv: 3000, pv: 2500, amt: 2500,
  },
  {
    name: 'Sun', uv: 4000, pv: 2000, amt: 6000,
  },
];

class AreaCharte extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c1rLyqj1/';

  render() {
    return (
     <div style={{ width: '80%', height: 500, margin : 50}}>
        <ResponsiveContainer>
          <AreaChart
            width={1000}
            height={400}
            data={data}
            margin={{
              top: 0, right: 50, left: 50, bottom: 50,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stackId="1" stroke="#B0008E" fill="#B0008E" />
            <Area type="monotone" dataKey="pv" stackId="1" stroke="#F04E98" fill="#F04E98" />
            <Area type="monotone" dataKey="amt" stackId="1" stroke="#74D2E7" fill="#74D2E7" />
          </AreaChart>
           </ResponsiveContainer>
      </div>
    );
  }
}
export default AreaCharte;