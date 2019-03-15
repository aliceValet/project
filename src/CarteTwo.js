import React, { PureComponent } from 'react';
import {
  ResponsiveContainer
} from 'recharts';
import { Card, Button, CardTitle, CardText, Media } from 'reactstrap';

class CardeTwo extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

  render() {
    return (
      <div style={{ width: '80%', height: 300, margin : 50}}>
        <ResponsiveContainer>
          <Card body inverse style={{ backgroundColor: '#000000', borderColor: '#F04E98' }} className="text-left">
            
              <Media>
                <Media left href="#">
                  <Media object data-src="Cat.jpg" alt="Profile Pic" style={{margin: 20}}/>
                </Media>
                <Media body style={{fontSize: "18px"}} >
                  <Media heading style={{fontSize: "30px"}}>
                    Hello, Helen.
                  </Media>
                   Here are your insights for this week.
                </Media>
              </Media>
            </Card>
           </ResponsiveContainer>
      </div>
    );
  }
}

export default CardeTwo;