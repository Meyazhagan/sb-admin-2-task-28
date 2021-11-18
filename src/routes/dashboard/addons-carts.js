import React from "react";
import Container from "../../components/common/container";
import Row from "../../components/common/align/Row";
import Col from "../../components/common/align/Col";
import Card from "../../components/common/cards/Card";
import CardHeader from "../../components/common/cards/CardHeader";
import CardBody from "../../components/common/cards/CardBody";
import { doughnut, area, bar } from "../../data/charts";
import MyChart from "../../components/common/cart";

function AddonsCarts() {
  return (
    <Container>
      <Row>
        <Col classes="-xl-8 col-lg-7">
          <Card classes="shadow mb-4">
            <CardHeader classes="py-3">
              <h6 className="m-0 font-weight-bold text-primary">Area Chart</h6>
            </CardHeader>
            <CardBody>
              <MyChart options={area} classes="-area" />
              <hr />
              Styling for the area chart can be found in the
              <code>/js/demo/chart-area-demo.js</code> file.
            </CardBody>
          </Card>
          <Card classes="shadow mb-4">
            <CardHeader classes="py-3">
              <h6 className="m-0 font-weight-bold text-primary">Area Chart</h6>
            </CardHeader>
            <CardBody>
              <MyChart options={bar} classes="-bar" />
              <hr />
              Styling for the bar chart can be found in the
              <code>/js/demo/chart-bar-demo.js</code> file.
            </CardBody>
          </Card>
        </Col>
        <Col classes="-xl-4 col-lg-5">
          <Card classes="shadow mb-4">
            <CardHeader classes="py-3">
              <h6 className="m-0 font-weight-bold text-primary">Area Chart</h6>
            </CardHeader>
            <CardBody>
              <MyChart options={doughnut} classes="-pie pt-4" />
              <hr />
              Styling for the donut chart can be found in the
              <code>/js/demo/chart-pie-demo.js</code> file.
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AddonsCarts;
