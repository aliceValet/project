import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,Legend,
} from 'recharts';

const data = [
  {
    name: 'Mon', uv: 4, pv: 2.5, amt: 2.4,
  },
  {
    name: 'Tue', uv: 3, pv: 1, amt: 5,
  },
  {
    name: 'Wed', uv: 2, pv: 6, amt: 3,
  },
  {
    name: 'Thu', uv: 5, pv: 2, amt: 2,
  },
  {
    name: 'Fri', uv: 1, pv: 6, amt: 1,
  },
  {
    name: 'Sat', uv: 3, pv: 2.5, amt: 2.5,
  },
  {
    name: 'Sun', uv: 4, pv: 2, amt: 6,
  },
];

class AreaCharte extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c1rLyqj1/';

  render() {
    return (
     <div style={{ width: '100%', height: 300, margin : 20}}>
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
            <Legend/>
            <Area name = "NF" type="monotone" dataKey="uv" stackId="1" stroke="#B0008E" fill="#B0008E" />
            <Area name = "C. Scott" type="monotone" dataKey="pv" stackId="1" stroke="#F04E98" fill="#F04E98" />
            <Area name = "D. Child" type="monotone" dataKey="amt" stackId="1" stroke="#74D2E7" fill="#74D2E7" />
          </AreaChart>
           </ResponsiveContainer>
      </div>
    );
  }
}
export default AreaCharte;