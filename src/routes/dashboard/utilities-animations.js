import React from "react";
import Col from "../../components/common/align/Col";
import Row from "../../components/common/align/Row";
import Card from "../../components/common/cards/Card";
import CardBody from "../../components/common/cards/CardBody";
import CardHeader from "../../components/common/cards/CardHeader";
import Container from "../../components/common/container";
import PageHeading from "../../components/PageHeading";

function UtilitiesAnimations() {
  return (
    <Container>
      <PageHeading title="Animation Utilities" />
      <p className="mb-4">
        Bootstrap's default utility classes can be found on the official
        Bootstrap Documentation page. The custom utilities below were created to
        extend this theme past the default utility classes built into
        Bootstrap's framework.
      </p>

      <Row>
        <Col classes="-lg-6">
          <Card classes="position-relative">
            <CardHeader classes="py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Grow In Animation Utilty
              </h6>
            </CardHeader>
            <CardBody>
              <div>
                <div className="mb-3">
                  <code>.animated--grow-in</code>
                </div>
                <div className="small mb-1">Navbar Dropdown Example:</div>
                <nav className="navbar navbar-expand navbar-light bg-light mb-4">
                  <button className="btn navbar-brand">Navbar</button>
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                      <button
                        className="nav-link dropdown-toggle btn"
                        id="navbarDropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Dropdown
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-right animated--grow-in"
                        aria-labelledby="navbarDropdown"
                      >
                        <button className="dropdown-item btn">Action</button>
                        <button className="dropdown-item btn">
                          Another action
                        </button>
                        <div className="dropdown-divider" />
                        <button className="dropdown-item btn">
                          Something else here
                        </button>
                      </div>
                    </li>
                  </ul>
                </nav>
                <p className="mb-0 small">
                  Note: This utility animates the CSS transform property,
                  meaning it will override any existing transforms on an element
                  being animated! In this theme, the grow in animation is only
                  being used on dropdowns within the navbar.
                </p>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col classes="-lg-6">
          <Card classes="position-relative">
            <CardHeader classes="py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Fade In Animation Utilty
              </h6>
            </CardHeader>
            <CardBody>
              <div>
                <div className="mb-3">
                  <code>.animated--fade-in</code>
                </div>
                <div className="small mb-1">Navbar Dropdown Example:</div>
                <nav className="navbar navbar-expand navbar-light bg-light mb-4">
                  <button className="btn navbar-brand">Navbar</button>
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                      <button
                        className="btn nav-link dropdown-toggle"
                        id="navbarDropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Dropdown
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-right animated--fade-in"
                        aria-labelledby="navbarDropdown"
                      >
                        <button className="btn dropdown-item">Action</button>
                        <button className="btn dropdown-item">
                          Another action
                        </button>
                        <div className="dropdown-divider" />
                        <button className="btn dropdown-item">
                          Something else here
                        </button>
                      </div>
                    </li>
                  </ul>
                </nav>
                <div className="small mb-1">Dropdown Button Example:</div>
                <div className="dropdown mb-4">
                  <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </button>
                  <div
                    className="dropdown-menu animated--fade-in"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <button className="btn dropdown-item">Action</button>
                    <button className="btn dropdown-item">
                      Another action
                    </button>
                    <button className="btn dropdown-item">
                      Something else here
                    </button>
                  </div>
                </div>
                <p className="mb-0 small">
                  Note: This utility animates the CSS opacity property, meaning
                  it will override any existing opacity on an element being
                  animated!
                </p>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default UtilitiesAnimations;
