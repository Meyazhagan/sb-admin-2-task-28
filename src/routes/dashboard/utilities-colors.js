import React from "react";
import Col from "../../components/common/align/Col";
import Row from "../../components/common/align/Row";
import Card from "../../components/common/cards/Card";
import CardBody from "../../components/common/cards/CardBody";
import CardHeader from "../../components/common/cards/CardHeader";
import Container from "../../components/common/container";
import PageHeading from "../../components/PageHeading";
import { gradient, scale } from "../../data/variants";

function UtilitiesColors() {
  return (
    <Container>
      <PageHeading title="Color Utilities" />
      <p className="mb-4">
        Bootstrap's default utility classes can be found on the official{" "}
        Bootstrap Documentation page. The custom utilities below were created to
        extend this theme past the default utility classes built into
        Bootstrap's framework.
      </p>
      <Row>
        <Col classes="-lg-4">
          <Card classes="shadow mb-4">
            <CardHeader classes="py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Custom Text Color Utilities
              </h6>
            </CardHeader>
            <CardBody>
              {scale.map((s) => (
                <p
                  className={`text-gray-${s} p-3 ${
                    s < 500 ? "bg-dark" : ""
                  } m-0`}
                >
                  {`.text-gray-${s}`}
                </p>
              ))}
            </CardBody>
          </Card>
          <Card classes="shadow mb-4">
            <CardHeader classes="py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Custom Font Size Utilities
              </h6>
            </CardHeader>
            <CardBody>
              <p className="text-xs">.text-xs</p>
              <p className="text-lg mb-0">.text-lg</p>
            </CardBody>
          </Card>
        </Col>
        <Col classes="-lg-4">
          <Card classes="shadow mb-4">
            <CardHeader classes="py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Custom Grayscale Background Utilities
              </h6>
            </CardHeader>
            <CardBody>
              {gradient.map((g) => (
                <p className={`px-3 py-5 bg-gradient-${g} text-white m-0`}>
                  {`.bg-gradient-${g}`}
                </p>
              ))}
            </CardBody>
          </Card>
        </Col>
        <Col classes="-lg-4">
          <Card classes="shadow mb-4">
            <CardHeader classes="py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Custom Grayscale Background Utilities
              </h6>
            </CardHeader>
            <CardBody>
              {scale.map((s) => (
                <p
                  className={`p-3 bg-gray-${s} ${
                    s > 500 ? "text-white" : ""
                  } m-0`}
                >
                  {`.bg-gray-${s}`}
                </p>
              ))}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default UtilitiesColors;
