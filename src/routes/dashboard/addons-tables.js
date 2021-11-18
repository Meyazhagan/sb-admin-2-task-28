import React, { useEffect } from "react";
import tableData from "../../data/table.json";
import Container from "../../components/common/container";
import PageHeading from "../../components/PageHeading";
import Card from "../../components/common/cards/Card";
import CardHeader from "../../components/common/cards/CardHeader";
import CardBody from "../../components/common/cards/CardBody";

function AddonsTables(props) {
  useEffect(() => {
    window.makeTable(props.id);
  }, [props.id]);
  return (
    <Container>
      <PageHeading title="Tables" />
      <p className="mb-4">
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables, please visit the
        official DataTables documentation.
      </p>

      <Card classes="shadow mb-4">
        <CardHeader classes="py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
          </h6>
        </CardHeader>
        <CardBody>
          <div className="table-responsive">
            <table id={props.id} className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.Name}</td>
                    <td>{row.Position}</td>
                    <td>{row.Office}</td>
                    <td>{row["Start date"]}</td>
                    <td>{row.Age}</td>
                    <td>{row.Salary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </Container>
  );
}

export default AddonsTables;
