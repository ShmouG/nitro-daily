import React from 'react';
import { Button } from 'reactstrap';

const Decisions = () => (
  <div>
    <Button outline color="primary">Option 1</Button>
    {' '}
    <Button outline color="secondary">Option 2</Button>
    {' '}
    <Button outline color="success">Option 3</Button>
    {' '}
  </div>
);

export default Decisions;
