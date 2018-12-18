import React from 'react';
import { Button } from 'reactstrap';
import './style.css';

function DecisionButton() {
  return (
    <div className="d-flex justify-content-around">
      <Button className="decision" color="success">Option 1</Button>
      {' '}
      <Button className="decision" color="success">Option 2</Button>
      {' '}
      <Button className="decision" color="success">Option 3</Button>
      {' '}
    </div>
  );
}

export default DecisionButton;
