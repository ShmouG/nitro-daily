import React from 'react';
import { Button } from 'reactstrap';
import './style.css';

function DecisionButton(props) {
  return (
    <div>
      <Button className="button">Option 1</Button>
      <Button className="button">Option 2</Button>
      <Button className="button">Option 3</Button>
    </div>
  );
}

export default DecisionButton;
