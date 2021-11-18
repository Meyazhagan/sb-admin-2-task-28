import React from "react";
import Col from "../../components/common/align/Col";
import Row from "../../components/common/align/Row";
import Card from "../../components/common/cards/Card";
import CardBody from "../../components/common/cards/CardBody";
import CardHeader from "../../components/common/cards/CardHeader";
import Container from "../../components/common/container";
import PageHeading from "../../components/PageHeading";

function UtilitiesOthers() {
  return (
    <Container>
      <PageHeading title="Other Utilities" />
      <p className="mb-4">
        Bootstrap's default utility classes can be found on the official
        Bootstrap Documentation page. The custom utilities below were created to
        extend this theme past the default utility classes built into
        Bootstrap's framework.
      </p>
      <Row>
        <Col classes="-lg-6">
          <Card classes="mb-4">
            <CardHeader classes="py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Overflow Hidden Utilty
              </h6>
            </CardHeader>
            <CardBody>
              Use <code>.o-hidden</code> to set the overflow property of any
              element to hidden.
            </CardBody>
          </Card>
          <Card classes="mb-4">
            <CardHeader classes="py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Progress Small Utilty
              </h6>
            </CardHeader>
            <CardBody>
              <div>
                <div className="mb-1 small">Normal Progress Bar</div>
                <div className="progress mb-4">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <div className="mb-1 small">Small Progress Bar</div>
                <div className="progress progress-sm mb-2">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                Use the <code>.progress-sm</code> class along with{"{"}" "{"}"}
                <code>.progress</code>
              </div>
            </CardBody>
          </Card>
          <Card classes="mb-4">
            <CardHeader classes="py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Dropdown - No Arrow
              </h6>
            </CardHeader>
            <CardBody>
              <div>
                <div className="dropdown no-arrow mb-4">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown (no arrow)
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <button className="dropdown-item">Action</button>
                    <button className="dropdown-item">Another action</button>
                    <button className="dropdown-item">
                      Something else here
                    </button>
                  </div>
                </div>
                Add the <code>.no-arrow</code> class alongside the{" "}
                <code>.dropdown</code>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col classes="-lg-6">
          <Card classes="mb-4">
            <CardHeader classes="py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Rotation Utilities
              </h6>
            </CardHeader>
            <CardBody classes="text-center">
              <div>
                <div className="bg-primary text-white p-3 rotate-15 d-inline-block my-4">
                  .rotate-15
                </div>
                <hr />
                <div className="bg-primary text-white p-3 rotate-n-15 d-inline-block my-4">
                  .rotate-n-15
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default UtilitiesOthers;
