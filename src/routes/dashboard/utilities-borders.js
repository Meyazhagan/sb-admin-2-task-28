import React from "react";
import Col from "../../components/common/align/Col";
import Row from "../../components/common/align/Row";
import Card from "../../components/common/cards/Card";
import CardBody from "../../components/common/cards/CardBody";
import Container from "../../components/common/container";
import PageHeading from "../../components/PageHeading";
import { gradient } from "../../data/variants";

function UtilitiesBorders() {
  return (
    <Container>
      <PageHeading title="Border Utilities" />
      <p className="mb-4">
        Bootstrap's default utility classes can be found on the official
        Bootstrap Documentation page. The custom utilities below were created to
        extend this theme past the default utility classes built into
        Bootstrap's framework.
      </p>
      <Row>
        <Col classes="-lg-6">
          {gradient.map((g) => (
            <Card classes={`mb-4 py-3 border-left-${g}`}>
              <CardBody>{`.border-left-${g}`}</CardBody>
            </Card>
          ))}
        </Col>
        <Col classes="-lg-6">
          {gradient.map((g) => (
            <Card classes={`mb-4 py-3 border-bottom-${g}`}>
              <CardBody>{`.border-left-${g}`}</CardBody>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default UtilitiesBorders;
