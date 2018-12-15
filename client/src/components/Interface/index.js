import React from 'react';
import {
  Card, CardText, CardBody, CardTitle,
} from 'reactstrap';
// import Input from '../Input';
import DecisionButtons from '../DecisionButtons';
import LocationImage from '../LocationImage';
import './style.css';

const Wrapper = () => (
  <div className="wrapper">
    <Card>
      <CardBody>
        <CardTitle>
          Location
        </CardTitle>
      </CardBody>
      <LocationImage />
      <CardBody>
        <CardText>
          Context
        </CardText>
        {/* <Input /> */}
        <DecisionButtons />
      </CardBody>
    </Card>
  </div>
);

export default Wrapper;
