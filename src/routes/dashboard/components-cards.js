import React, { useState } from "react";
import Row from "../../components/common/align/Row";
import Col from "../../components/common/align/Col";
import BasicCard from "../../components/common/cards/BasicCard";
import Card from "../../components/common/cards/Card";
import CardHeader from "../../components/common/cards/CardHeader";
import CardBody from "../../components/common/cards/CardBody";
import PageHeading from "../../components/PageHeading";
import Container from "../../components/common/container";

function ComponentsCards() {
  const [progress] = useState({ now: 50, min: 0, max: 100 });

  return (
    <Container classes="-fluid">
      {/* Page Heading */}
      <PageHeading title="Card" />
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
        <Col classes="-lg-6">
          <Card classes="mb-4">
            <CardHeader>Default Card Example</CardHeader>
            <CardBody>
              This card uses Bootstrap's default styling with no utility classes
              added. Global styles are the only things modifying the look and
              feel of this default card example.
            </CardBody>
          </Card>
          {/* Basic Card Example */}
          <Card classes="shadow mb-4">
            <CardHeader classes="py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Basic Card Example
              </h6>
            </CardHeader>
            <CardBody>
              The styling for this basic card example is created by using
              default Bootstrap utility classes. By using utility classes, the
              style of the card component can be easily modified with no need
              for any custom CSS!
            </CardBody>
          </Card>
        </Col>
        <Col classes="-lg-6">
          <Card classes="shadow mb-4">
            {/* Card Header - Dropdown */}
            <CardHeader classes="py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                Dropdown Card Example
              </h6>
              <div className="dropdown no-arrow">
                <button
                  className="btn btn-sm dropdown-toggle"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                </button>
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="dropdown-header">Dropdown Header:</div>
                  <button className="dropdown-item">Action</button>
                  <button className="dropdown-item">Another action</button>
                  <div className="dropdown-divider" />
                  <button className="dropdown-item">Something else here</button>
                </div>
              </div>
            </CardHeader>
            {/* Card Body */}
            <CardBody>
              Dropdown menus can be placed in the card header in order to extend
              the functionality of a basic card. In this dropdown card example,
              the Font Awesome vertical ellipsis icon in the card header can be
              clicked on in order to toggle a dropdown menu.
            </CardBody>
          </Card>
          {/* Collapsable Card Example */}
          <Card classes="shadow mb-4">
            {/* Card Header - Accordion */}
            <a
              href="#collapseCardExample"
              className="d-block card-header py-3"
              data-toggle="collapse"
              aria-expanded="true"
              aria-controls="collapseCardExample"
            >
              <h6 className="m-0 font-weight-bold text-primary">
                Collapsable Card Example
              </h6>
            </a>
            {/* Card Content - Collapse */}
            <div className="collapse show" id="collapseCardExample">
              <CardBody>
                This is a collapsable card example using Bootstrap's built in
                collapse functionality.{" "}
                <strong>Click on the card header</strong> to see the card body
                collapse and expand!
              </CardBody>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ComponentsCards;
