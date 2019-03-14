import React, { PureComponent } from 'react';
import {
  ResponsiveContainer, PieChart, Pie, Legend,
} from 'recharts';
import './Pies.css'
const data = [
  { name: 'Group A', value: 200 }, { name: 'Group B', value: 500 },
  { name: 'Group C', value: 300 }, { name: 'Group D', value: 100 },
];

class PieCharte extends PureComponent {
  static jsfiddleUrl = '//jsfiddle.net/alidingling/6okmehja/';

  render() {
    return (
      <div style={{ width: '100%', height: 500, margin : 50}}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} fill="#74D2E7" label="Vos préférences stylistiques" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default PieCharte;
