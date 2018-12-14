import React from "react";
import { Col, Row } from "../components/grid/grid";
import Card from '../components/Card/card';

function NoMatch() {
  return (
    <Card>
      <Row>
        <Col size="md-12">
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
        </Col>
      </Row>
    </Card>
  );
}

export default NoMatch;
