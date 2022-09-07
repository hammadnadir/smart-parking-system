import React, { useEffect } from "react";
import {
  Container,
  Nav,
  Navbar,
  Button,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.scss";

function Cars({inputText ,setInputText }) {

  const handleSubmit=(e)=>{
    e.preventDefault();
  }

  return (
    <div className="cars-page">
      <div className="data">
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">SMART PARKING</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Form className="d-flex" onSubmit={handleSubmit}>
                {/* <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={inputText}
                  name="search"
                  onChange={(e) => setInputText(e.target.value)}
                />
                <Button
                  variant="outline-success"
                  type="submit"
                >
                  Search
                </Button> */}
                <div className="new">
                  <Link to="/">
                    <Button variant="outline-danger">Sign Out</Button>
                  </Link>
                </div>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Cars;
