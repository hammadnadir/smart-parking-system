import React, { useCallback, useRef, useState } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import "./style.scss";
import ReactToPrint from "react-to-print";
import { ComponentToPrint } from "../../Slip";

function Banner() {
  const [show, setShow] = useState(false);

  const reference = useRef(null);

  const reactToPrintContent = useCallback(() => {
    return reference.current;
  }, [reference.current]);

  const reactToPrintTrigger = useCallback(() => {
    return <i className="bi bi-printer" style={{ cursor: "pointer" }}></i>;
  }, []);

  const handledelete = (value) => {
    // const filtered = product.map((data)=>data !== value)
    // setData(filtered)
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const abcd = [
    {
      id: 1,
      number: "LEZ2021",
      parkingno: 1,
    },
    {
      id: 2,
      number: "LEZ2021",
      parkingno: 2,
    },
    {
      id: 3,
      number: "LEZ2021",
      parkingno: 3,
    },
    {
      id: 4,
      number: "LEZ2021",
      parkingno: 4,
    },
  ];
  return (
    <div>
      <Container>
        <div className="space">
          <h3>Avalible Space: 100</h3>
        </div>
        <div className="page2">
          <Button variant="primary" onClick={handleShow}>
            Add New Car
          </Button>
        </div>
        <div>
          <Modal show={show} onHide={handleClose} centered>
            <h2>Car Detail</h2>
            <div>
              <input type="text" />
            </div>
            <Button>Enter</Button>
          </Modal>
        </div>
        <div>
          <ComponentToPrint ref={reference} />
          {abcd.reverse().map((item, index) => {
            return (
              <div className="cars" key={index}>
                <div className="numbers">
                  <h4>
                    {item.id}. {item.number}
                  </h4>
                  <h5>Time: 12:00 am</h5>
                </div>
                <div className="icones">
                  <ReactToPrint
                    content={reactToPrintContent}
                    removeAfterPrint
                    trigger={reactToPrintTrigger}
                  />
                  <i
                    className="bi bi-trash-fill"
                    onClick={() => handledelete(item)}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default Banner;
