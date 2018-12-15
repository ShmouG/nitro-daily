import React from 'react';
import {
  Card, CardText, CardBody, CardTitle,
} from 'reactstrap';

const Wrapper = () => (
  <div>
    <Card>
      <CardBody>
        <CardTitle>
          Location
        </CardTitle>
      </CardBody>
      <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="example" />
      <CardBody>
        <CardText>
          Context
        </CardText>

      </CardBody>
    </Card>
  </div>
);

export default Wrapper;
