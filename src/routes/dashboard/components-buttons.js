import React from "react";
import Col from "../../components/common/align/Col";
import Row from "../../components/common/align/Row";
import Card from "../../components/common/cards/Card";
import CardBody from "../../components/common/cards/CardBody";
import CardHeader from "../../components/common/cards/CardHeader";
import Container from "../../components/common/container";
import Link from "../../components/common/link";
import PageHeading from "../../components/PageHeading";
import { btnCircle, btnSplit } from "../../data/buttons";

function ComponentsButtons() {
  return (
    <Container classes="-fluid">
      {/* Page Heading */}
      <PageHeading title="Buttons" />
      <Row>
        <Col classes="-lg-6">
          {/* Circle Buttons */}
          <Card classes="shadow mb-4">
            <CardHeader classes="py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Circle Buttons
              </h6>
            </CardHeader>
            <CardBody>
              <p>
                Use Font Awesome Icons (included with this theme package) along
                with the circle buttons as shown in the examples below!
              </p>
              {/* Circle Buttons (Default) */}
              <div className="mb-2">
                <code>.btn-circle</code>
              </div>
              <button className="btn btn-primary btn-circle mr-1">
                <i className="fab fa-facebook-f" />
              </button>
              {btnCircle.map((btn, index) => (
                <button
                  key={index}
                  className={`btn btn-${btn.variant} btn-circle mr-1`}
                >
                  <i className={`fas fa-${btn.icon}`} />
                </button>
              ))}
              {/* Circle Buttons (Small) */}
              <div className="mt-4 mb-2">
                <code>.btn-circle .btn-sm</code>
              </div>
              <button className="btn btn-primary btn-circle mr-1 btn-sm">
                <i className="fab fa-facebook-f" />
              </button>
              {btnCircle.map((btn, index) => (
                <button
                  key={index}
                  className={`btn btn-${btn.variant} btn-circle mr-1 btn-sm`}
                >
                  <i className={`fas fa-${btn.icon}`} />
                </button>
              ))}
              {/* Circle Buttons (Large) */}
              <div className="mt-4 mb-2">
                <code>.btn-circle .btn-lg</code>
              </div>
              <button className="btn btn-primary btn-circle mr-1 btn-lg">
                <i className="fab fa-facebook-f" />
              </button>
              {btnCircle.map((btn, index) => (
                <button
                  key={index}
                  className={`btn btn-${btn.variant} btn-circle mr-1 btn-lg`}
                >
                  <i className={`fas fa-${btn.icon}`} />
                </button>
              ))}
            </CardBody>
          </Card>
          {/* Brand Buttons */}
          <Card classes="shadow mb-4">
            <CardHeader classes="py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Brand Buttons
              </h6>
            </CardHeader>
            <CardBody>
              <p>
                Google and Facebook buttons are available featuring each
                company's respective brand color. They are used on the user
                login and registration pages.
              </p>
              <p>
                You can create more custom buttons by adding a new color
                variable in the
                <code>_variables.scss</code> file and then using the Bootstrap
                button variant mixin to create a new style, as demonstrated in
                the <code>_buttons.scss</code>
                file.
              </p>
              <Link path="#" classes="btn btn-google btn-block">
                <i className="fab fa-google fa-fw" />
                .btn-google
              </Link>
              <Link path="#" classes="btn btn-facebook btn-block">
                <i className="fab fa-facebook-f fa-fw" /> .btn-facebook
              </Link>
            </CardBody>
          </Card>
        </Col>
        <Col classes="-lg-6">
          <Card classes="shadow mb-4">
            <CardHeader classes="py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Split Buttons with Icon
              </h6>
            </CardHeader>
            <CardBody>
              <p>
                Works with any button colors, just use the{" "}
                <code>.btn-icon-split</code> class and the markup in the
                examples below. The examples below also use the
                <code>.text-white-50</code> helper class on the icons for
                additional styling, but it is not required.
              </p>

              {btnSplit.map((btn, index) => (
                <div key={index}>
                  <button className={`btn btn-${btn.variant} btn-icon-split`}>
                    <span className="icon text-white-50">
                      <i className={`fas fa-${btn.icon}`} />
                    </span>
                    <span className="text">Split Button Primary</span>
                  </button>
                  <div className="my-2" />
                </div>
              ))}
              <div className="mb-4" />
              <p>Also works with small and large button classes!</p>
              <button className="btn btn-primary btn-icon-split btn-sm">
                <span className="icon text-white-50">
                  <i className="fas fa-flag" />
                </span>
                <span className="text">Split Button Small</span>
              </button>
              <div className="my-2" />
              <button className="btn btn-primary btn-icon-split btn-lg">
                <span className="icon text-white-50">
                  <i className="fas fa-flag" />
                </span>
                <span className="text">Split Button Large</span>
              </button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ComponentsButtons;
