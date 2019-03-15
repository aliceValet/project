import React, { PureComponent } from 'react';
import {
  ResponsiveContainer
} from 'recharts';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

class Carde extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

  render() {
    return (
      <div style={{ width: '50%', height: 300, margin : 20}}>
        <ResponsiveContainer>
          <Card body inverse style={{ backgroundColor: '#000000', borderColor: '#F04E98' }} className="text-center">
        <CardTitle>Total hours of playing music</CardTitle>
        <CardText>65h</CardText>
        <Button>Go somewhere</Button>
      </Card>
           </ResponsiveContainer>
      </div>
    );
  }
}

export default Carde;
