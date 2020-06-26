import React from "react";
import 'materialize-css';
import { Col, Card, CardTitle, Icon } from 'react-materialize';

function card(props) {
  console.log(props);

  return (
    <Col
      l={4}
      m={4}
      s={12}
    >
        <Card
          actions={[
            <a key="1" href={props.repo}>Repository</a>
          ]}
          closeIcon={<Icon>close</Icon>}
          header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" href={props.link}>{props.title}</CardTitle>}
          revealIcon={<Icon>more_vert</Icon>}
        >
          {props.description}
        </Card>
    </Col>
  )
}

export default card;