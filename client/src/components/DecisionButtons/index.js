import React from 'react';
import { Button } from 'reactstrap';
import './style.css';

function DecisionButton(props) {
  // const { scenario } = props;
  // const { option1 } = scenario;
  return (
    <div className="d-flex flex-column">
      <Button className="decision" color="success" />
      {' '}
      <Button className="decision" color="success">Option 2</Button>
      {' '}
      <Button className="decision" color="success">Option 3</Button>
      {' '}
    </div>
  );
}

export default DecisionButton;
