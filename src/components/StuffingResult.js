import React from 'react';
import { Card, Button, Row, Col, Table, Container } from 'react-bootstrap';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Big bags', value: 9000, color: '#1e40af' },
  { name: 'Sacks', value: 4500, color: '#d946ef' },
  { name: 'Boxes 1', value: 800, color: '#22c55e' }
];

const StuffingResult = () => {
  return (
    <Container className="mt-4">
      {/* Tabs Navigation (simplified for this page) */}
      {/* <div className="d-flex justify-content-center border-bottom mb-3">
        <span className="px-4 py-2 text-muted">📇 PRODUCTS</span>
        <span className="px-4 py-2 text-muted">🚚 CONTAINERS & TRUCKS</span>
        <span className="px-4 py-2 fw-bold border-bottom border-primary text-primary">
          📊 STUFFING RESULT
        </span>
      </div> */}

      {/* Top Section: Container Summary */}
      <Card className="mb-3 shadow-sm">
        <Card.Body className="d-flex">
          <div className="text-center border-end pe-4">
            <img src="https://cdn-icons-png.flaticon.com/512/6284/6284683.png" alt="container" width="100" />
            <p className="text-primary mb-0">1 unit</p>
            <small>weight: 14300.00 kg<br />volume: 28.30 m³</small>
          </div>
          <div className="ps-4">
            <h5>20 Standard #1</h5>
            <Row className="mb-2">
              <Col><strong>Total:</strong> 190 packages</Col>
              <Col><strong>Cargo volume:</strong> 28.30 m³ <small className="text-muted">(85% of volume)</small></Col>
              <Col><strong>Cargo weight:</strong> 14300.00 kg <small className="text-muted">(50% of max weight)</small></Col>
            </Row>
          </div>
        </Card.Body>
      </Card>

      {/* Bottom Section: Chart & Table */}
      <Card className="mb-3 shadow-sm">
        <Card.Body>
          <Row>
            <Col md={4} className="d-flex align-items-center justify-content-center">
              <PieChart width={180} height={180}>
                <Pie
                  data={data}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  label
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </Col>

            <Col md={8}>
              <Table bordered hover responsive>
                <thead className="table-light">
                  <tr>
                    <th>Name</th>
                    <th>Packages</th>
                    <th>Volume</th>
                    <th>Weight</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="badge bg-primary me-2">&nbsp;</span> Big bags</td>
                    <td>10</td>
                    <td>10.00 m³</td>
                    <td>9000.00 kg</td>
                  </tr>
                  <tr>
                    <td><span className="badge bg-pink me-2">&nbsp;</span> Sacks</td>
                    <td>100</td>
                    <td>13.50 m³</td>
                    <td>4500.00 kg</td>
                  </tr>
                  <tr>
                    <td><span className="badge bg-success me-2">&nbsp;</span> Boxes 1</td>
                    <td>80</td>
                    <td>4.80 m³</td>
                    <td>800.00 kg</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Footer Buttons */}
      <div className="d-flex justify-content-end gap-2">
        <Button variant="outline-primary">Back</Button>
        <Button variant="primary">Export to PDF</Button>
        <Button variant="primary">Copy request</Button>
      </div>
    </Container>
  );
};

export default StuffingResult;
