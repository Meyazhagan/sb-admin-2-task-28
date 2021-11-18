import React, { useState } from "react";
import Container from "../../components/common/container";
import Row from "../../components/common/align/Row";
import Col from "../../components/common/align/Col";
import Card from "../../components/common/cards/Card";
import CardHeader from "../../components/common/cards/CardHeader";
import CardBody from "../../components/common/cards/CardBody";
import { doughnut, area } from "../../data/charts";
import MyChart from "../../components/common/cart";
import PageHeading from "../../components/PageHeading";
import BasicCard from "../../components/common/cards/BasicCard";
import Progress from "../../components/common/progress";
import { colors } from "../../data/variants";

function Home() {
  const [progress] = useState({ now: 50, min: 0, max: 100 });
  return (
    <Container>
      <PageHeading title="Dashboard">
        <button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <i className="fas fa-download fa-sm text-white-50" /> Generate Report
        </button>
      </PageHeading>
      <Row>
        {/* Earnings (Monthly) Card Example */}
        <BasicCard
          type="primary"
          title="Earnings (Monthly)"
          info="$40,000"
          icon="calendar"
        />
        <BasicCard
          type="primary"
          title=" Earnings (Annual)"
          info="$215,000"
          icon="dollar-sign"
        />
        <BasicCard
          type="info"
          title="Tasks"
          info={progress.now}
          progress={progress}
          icon="clipboard-list"
        />
        <BasicCard
          type="warning"
          title="Pending Requests"
          info="18"
          icon="comments"
        />
      </Row>
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
      <Row>
        <Col classes="-lg-6 mb-4">
          <Card classes="shadow mb-4">
            <CardHeader classes="py-3">
              <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
            </CardHeader>
            <CardBody>
              <Progress
                variant="danger"
                min="0"
                max="100"
                now="20"
                title="Server Migration"
              />
              <Progress
                variant="warning"
                min="0"
                max="100"
                now="40"
                title="Sales Tracking"
              />
              <Progress
                variant=""
                min="0"
                max="100"
                now="60"
                title="Customer Database"
              />
              <Progress
                variant="info"
                min="0"
                max="100"
                now="80"
                title="Payout Details"
              />
              <Progress
                variant="success"
                min="0"
                max="100"
                now="100"
                title="Account Setup"
              />
            </CardBody>
          </Card>
          <Row>
            {colors.map((c, index) => (
              <Col classes="-lg-6 mb-4" key={index}>
                <Card
                  classes={`bg-${c.variant} text-${
                    c.variant === "light" ? "black" : "white"
                  } shadow`}
                >
                  <CardBody>
                    {c.variant}
                    <div
                      className={`text-${
                        c.variant === "light" ? "black" : "white"
                      }-50 small`}
                    >
                      {c.color}
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col classes="-lg-6 mb-4">
          <Card classes="shadow mb-4">
            <CardHeader classes="py-4">
              <h6 className="m-0 font-weight-bold text-primary">
                Illustrations
              </h6>
            </CardHeader>
            <CardBody>
              <div>
                <div className="text-center">
                  <img
                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                    style={{ width: "25rem" }}
                    src="assets/img/undraw_posting_photo.svg"
                    alt="..."
                  />
                </div>
                <p>
                  Add some quality, svg illustrations to your project courtesy
                  of unDraw, a constantly updated collection of beautiful svg
                  images that you can use completely free and without
                  attribution!
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://undraw.co/"
                >
                  Browse Illustrations on unDraw →
                </a>
              </div>
            </CardBody>
          </Card>
          <Card classes="shadow mb-4">
            <CardHeader classes="py-4">
              <h6 className="m-0 font-weight-bold text-primary">
                Development Approach
              </h6>
            </CardHeader>
            <CardBody>
              <div>
                <p>
                  SB Admin 2 makes extensive use of Bootstrap 4 utility classes
                  in order to reduce CSS bloat and poor page performance. Custom
                  CSS classes are used to create custom components and custom
                  utility classes.
                </p>
                <p className="mb-0">
                  Before working with this theme, you should become familiar
                  with the Bootstrap framework, especially the utility classes.
                </p>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
