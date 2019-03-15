import React, { PureComponent } from 'react';
import {
  ResponsiveContainer
} from 'recharts';
import { Card, Button, CardTitle, CardText, Media } from 'reactstrap';
import kitty from "./Cat.jpg"

class CardeTwo extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

  render() {
    return (
      <div style={{ width: '80%', height: 300, margin : 50}}>
        <ResponsiveContainer>
          <Card body inverse style={{ backgroundColor: '#000000', borderColor: '#F04E98' }} className="text-left">
            
              <Media>
                
                  <Media object src={kitty} alt="Profile Pic" style={{width:'60%', borderRadius:'50%'}}/>
                
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