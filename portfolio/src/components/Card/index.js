import React from "react";
import 'materialize-css';
import { Row, Col, Card, CardTitle, Icon } from 'react-materialize';

function card() {
    return (
  <Col
    xl={4}
    l={4}
    m={4}
    s={6}
  >
    <Card
      actions={[
        <a key="1" href="#">This is a Link</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Card Title</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      Here is the standard card with an image thumbnail.
    </Card>
  </Col>
    )
}

export default card;