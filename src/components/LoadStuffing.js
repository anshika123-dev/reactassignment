import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Button,
  Form,
  Row,
  Col,
  InputGroup,
  Badge,
  Card,
  ButtonGroup,
} from "react-bootstrap";
import { Table, Container } from 'react-bootstrap';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { FaBox, FaTrash, FaCog } from "react-icons/fa";
import "../../src/components/LoadStuffing.css";
import { BsBag } from "react-icons/bs";
import img from "../components/download.png"
import {FaArrowUp, FaArrowDown } from "react-icons/fa";
import { FaFileImport, FaFileExport, FaStar } from "react-icons/fa";
import ThreeDView from "./ThreeDView";
import TwoDView from "./TwoDView";
import { Modal } from "react-bootstrap";
const initialProduct = {
   icon: <FaBox />,
  name: "",
  length: "",
  width: "",
  height: "",
  weight: "",
  quantity: "",
  color: "#000000",
};


const LoadStuffing = () => {
  
const data = [
  { name: 'Big bags', value: 9000, color: '#1e40af' },
  { name: 'Sacks', value: 4500, color: '#d946ef' },
  { name: 'Boxes 1', value: 800, color: '#22c55e' }
];

  const [products, setProducts] = useState(
   [
      {
        name: "Boxes 1",
        length: 500,
        width: 400,
        height: 300,
        weight: 10,
        quantity: 80,
        color: "#28a745",
        icon: <FaBox />,
      },
      {
        name: "Sacks",
        length: 1000,
        width: 450,
        height: 300,
        weight: 45,
        quantity: 100,
        color: "#e83e8c",
        icon: <FaBox />,
      },
      {
        name: "Big bags",
        length: 1000,
        width: 1000,
        height: 1000,
        weight: 900,
        quantity: 10,
        color: "#007bff",
        icon: <BsBag />,
      },
    ]
);
const [show3D, setShow3D] = useState(false);

const handle3DOpen = () => setShow3D(true);
const handle3DClose = () => setShow3D(false);
  const handleAddProduct = () => {
    setProducts([...products, { ...initialProduct }]);
  };
  const InputWithUnit = ({ value, unit,onChange }) => {
    return (
      <div className="d-flex align-items-center border rounded  bg-light"style={{padding:"6px"}}>
        <Form.Control
          type="number"
          value={value}
          className="border-0 bg-light shadow-none p-0"
          style={{ width: "100%" }}
              onChange={(e) => onChange(Number(e.target.value))}
        />
        <span className="ms-1 text-muted small">{unit}</span>
      </div>
    );
  };

  const handleChange = (index, field, value) => {
    const updated = [...products];
    updated[index][field] = value;
    setProducts(updated);
  };

  const handleDelete = (index) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
  };
  const [key, setKey] = useState("products");
  return (
    <div className="container ">
      <h2 className="text-center mb-5 mt-5">Load & Stuffing Calculation</h2>
      <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 justify-content-center fw-bold custom-tabs"
        fill
      >
        <Tab eventKey="products" title="📇 PRODUCTS">
          <Card className="p-2 shadow-sm border rounded mb-4">
            <Row className="align-items-center justify-content-between">
              <Col>
                <Button variant="primary" className="fw-semibold px-4">
                  + Add Group
                </Button>
              </Col>
              <Col xs="auto">
                <ButtonGroup className="gap-2">
                  <Button
                    variant="light"
                    className="text-success fw-semibold d-flex align-items-center gap-2 border-0"
                  >
                    <FaFileImport />
                    Import
                  </Button>
                  <Button
                    variant="light"
                    className="text-primary fw-semibold d-flex align-items-center gap-2 border-0"
                  >
                    <FaFileExport />
                    Export
                  </Button>
               
                </ButtonGroup>
              </Col>
            </Row>
          </Card> 



<div className="border p-3 rounded mb-4">
  {/* Group Header with Badge + Icons */}
  <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
    <h5 className="mb-0">
      <Badge bg="transparent" style={{ color: "black" }}>
        Group #1
      </Badge>
    </h5>
    <div className="d-flex gap-2">
    <Button variant="danger" size="sm">
        <FaTrash />
      </Button>
      <Button variant="light" size="sm">
        <FaArrowUp />
      </Button>
      <Button variant="light" size="sm">
        <FaArrowDown />
      </Button>
    
    </div>
  </div>
  <div className="p-3  rounded bg-white">
      {/* Header */}
      <Row className="text-muted fw-semibold border-bottom pb-2 mb-3">
        <Col md={1}>Type</Col>
        <Col md={2}>Product Name</Col>
        <Col md={1}>Length / Diameter</Col>
        <Col md={1}>Width</Col>
        <Col md={1}>Height</Col>
        <Col md={1}>Weight</Col>
        <Col md={1}>Quantity</Col>
        <Col md={1}>Color</Col>
        <Col md={2}>Stack</Col>
      </Row>

      {/* Product Rows */}
      {products.map((prod, index) => (
        <Row className="align-items-center mb-3 border-bottom pb-2" key={index}>
          <Col md={1} className="fs-5 text-center">
            {prod.icon}
          </Col>
          <Col md={2}>
            <Form.Control value={prod.name}      onChange={(e) => handleChange(index, "name", e.target.value)}/>
          </Col>
          <Col md={1}>
            <InputWithUnit value={prod.length} unit="mm"   onChange={(val) => handleChange(index, "length", val)}/>
          </Col>
          <Col md={1}>
            <InputWithUnit value={prod.width} unit="mm"           onChange={(val) => handleChange(index, "width", val)}/>
          </Col>
          <Col md={1}>
            <InputWithUnit value={prod.height} unit="mm"       onChange={(val) => handleChange(index, "height", val)} />
          </Col>
          <Col md={1}>
            <InputWithUnit value={prod.weight} unit="kg"     onChange={(val) => handleChange(index, "weight", val)} />
          </Col>
          <Col md={1}>
            <Form.Control value={prod.quantity}        onChange={(e) => handleChange(index, "quantity", Number(e.target.value))}/>
          </Col>
      
            <Col md={1} className="text-center">
  <Form.Control
    type="color"
    value={prod.color}
    onChange={(e) => handleChange(index, "color", e.target.value)}
    style={{ padding: 0, width: 30, height: 30, border: "none", background: "none" }}
  />
</Col>

         
          <Col md={2} className="d-flex gap-2 ">
            <Button variant="light" className="border">
              <FaCog />
            </Button>
            <Button variant="light" className="border text-danger"       onClick={() => handleDelete(index)}>
              <FaTrash />
            </Button>
          </Col>
        </Row>
      ))}
      <div className="d-flex align-items-center gap-3 mt-3">
  <Button variant="outline-primary" onClick={handleAddProduct}>
    + Add Product
  </Button>
  <Form.Check type="checkbox" label="Use pallets" />
</div>

    </div>
 


</div>


          <div className="text-center mt-4">
            <Button variant="primary" style={{width:"10%"}}>Next</Button>
          </div>
        </Tab>

        <Tab eventKey="containers" title="🚚 CONTAINERS & TRUCKS">
          <p className="text-center mt-4">Container Form Goes Here</p>
        </Tab>

        <Tab eventKey="result" title="📊 STUFFING RESULT">
      
  

<Row>
  <Col md={3}>
  <Card className="mb-4 shadow-sm" >
  <Card.Body className="text-center d-flex flex-column align-items-center">
    <h6 className="fw-bold mb-3">20 STANDARD</h6>
    <img
      src="https://www.searates.com/design/images/apps/load-calculator/20st.svg"
      alt="container"
      width="100"
      className="mb-2"
    />
    <p className="text-primary mb-1">1 unit</p>
    <small className="text-muted d-block">
      weight: <strong>14300.00 kg</strong>
    </small>
    <small className="text-muted d-block">
      volume: <strong>28.30 m³</strong>
    </small>
  </Card.Body>
</Card>

  </Col>
</Row>
 
   
      
    {/* Top Section: Container Image and Stuffing Summary */}
    
    <Card className="mb-4 shadow-sm">
  <Card.Body>
    <Row className="mb-4">
      {/* Left: Container Image */}
      <Col md={3} className="text-center border-end">
      <h6 className="fw-bold mb-3">20 STANDARD</h6>
    <img
      src={img}
      alt="container"
      width="300"
      className="mb-2"
    />
    <div className="d-flex" style={{justifyContent:"space-between"}}>   <p className="text-primary mb-1">1 unit</p>
  <Button size="sm" variant="outline-primary" onClick={handle3DOpen}>
  3D VIEW
</Button>
            </div>

      </Col>

      {/* Right: Stuffing Summary */}
      <Col md={9}>
        <Row className="mb-4 pb-3 border-bottom">
        
          <Col>
            <p className="mb-1">
              <strong>Total</strong>: 190 packages
            </p>
            <p className="mb-1">
              <strong>Cargo volume</strong>: 28.30 m³{" "}
              <span className="text-muted">(85% of volume)</span>
            </p>
            <p className="mb-0">
              <strong>Cargo weight</strong>: 14300.00 kg{" "}
              <span className="text-muted">(50% of max weight)</span>
            </p>
          </Col>
        </Row>
        <Row >
          <Col md={3}>
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
        <Col md={9}>
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
              <td>
                <span className="badge bg-primary me-2">&nbsp;</span> Big bags
              </td>
              <td>10</td>
              <td>10.00 m³</td>
              <td>9000.00 kg</td>
            </tr>
            <tr>
              <td>
                <span className="badge bg-pink me-2">&nbsp;</span> Sacks
              </td>
              <td>100</td>
              <td>13.50 m³</td>
              <td>4500.00 kg</td>
            </tr>
            <tr>
              <td>
                <span className="badge bg-success me-2">&nbsp;</span> Boxes 1
              </td>
              <td>80</td>
              <td>4.80 m³</td>
              <td>800.00 kg</td>
            </tr>
          </tbody>
        </Table>
        </Col>
        </Row>
      </Col>
    </Row>

    {/* Bottom Section: Pie Chart & Table */}
   
  </Card.Body>
</Card>

      {/* Footer Buttons */}
      <div className="d-flex justify-content-end gap-2">
        <Button variant="outline-primary">Back</Button>
        <Button variant="primary">Export to PDF</Button>
        <Button variant="primary">Copy request</Button>
      </div>

        </Tab>
      </Tabs>
      <Modal show={show3D} onHide={handle3DClose} size="lg" centered>
  <Modal.Header closeButton>
    <Modal.Title>📦 3D Stuffing Preview</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <ThreeDView products={products} />
  </Modal.Body>
</Modal>

    </div>
  );
};

export default LoadStuffing;
