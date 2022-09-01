import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container, Button, Modal, Form } from "react-bootstrap";
import "./style.scss";
import ReactToPrint from "react-to-print";
// import { ComponentToPrint } from "../../Slip";

function Banner({ inputText }) {
  const getCarsData = () => {
    const storedValues = localStorage.getItem("form");
    if (!storedValues) return [];
    return JSON.parse(storedValues);
  };
  const getQuantity = () => {
    const newValues = localStorage.getItem("numbers");
    if (!newValues) return 100;
    return JSON.parse(newValues);
  };
  
  const getSub = () => {
    const newValues = localStorage.getItem("aaaa");
    if (!newValues) return 1000;
    return JSON.parse(newValues);
  };
  const [show, setShow] = useState(false);
  const [data, setData] = useState(getCarsData);
  const [enterNo, setEnterNo] = useState("");
  const [submitNo, setSubmitNo] = useState();
  const [spaces, setSpaces] = useState(getQuantity);

  const reference = useRef(null);

  const handlePrint = (item,index) => {
    setSubmitNo(data.number);
    // const abcd = item.number;
    // setSubmitNo(data[index].number)
    console.log(submitNo)
  };

  const handledelete = (value) => {
    const filtered = data.filter((items) => items !== value);
    setData(filtered);
    setSpaces(spaces + 1);
  };

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(data));
  }, [data]);
  useEffect(() => {
    localStorage.setItem("aaaa", JSON.stringify(submitNo));
  }, [submitNo]);

  useEffect(() => {
    localStorage.setItem("numbers", JSON.stringify(spaces));
  }, [spaces]);

  const handleNumberSubmit = (e) => {
    e.preventDefault();
    if (!enterNo) {
      alert("please enter no");
    } else {
      setSubmitNo(enterNo);
      setData([...data, { number: enterNo }]);
      setShow(false);
      console.log(data);
      setEnterNo("");
      setSpaces(spaces - 1);
    }
  };
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const today = new Date();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = (value, index) => {
    setShow(true);
    setSpaces(spaces + 1);
    const filtered = data.filter((abcd)=>abcd !== value)
    setData(filtered)
    setEnterNo({ number: value.number });
  };

  return (
    <div className="main-data-page">
      <Container>
        <div className="space">
          <h3>Avalible Space: {spaces}</h3>
        </div>
        <div className="page2">
          <Button variant="primary" onClick={handleShow}>
            Add New Car
          </Button>
        </div>
        <div>
          <Modal show={show} onHide={handleClose} centered>
            <Form onSubmit={handleNumberSubmit}>
              <h2>Car Detail</h2>
              <div>
                <input
                  type="text"
                  name="number"
                  placeholder="Enter Car No."
                  value={enterNo.number}
                  onChange={(e) => setEnterNo(e.target.value)}
                />
              </div>
              <Button type="submit">Enter</Button>
            </Form>
          </Modal>
        </div>
        <div>
          {data?.length > 0 &&
            data
              ?.filter((items) =>
                items.number.match(new RegExp(inputText, "i"))
              )
              .reverse()
              .map((item, index) => {
                return (
                  <div className="cars" key={index}>
                    <div className="numbers">
                      <h4>Number:</h4>&nbsp;
                      <h4>{item.number}</h4>
                    </div>
                    <div className="icones">
                      <i
                        onClick={() => handleEdit(item, index)}
                        class="bi bi-pen"
                      ></i>
                      <div onClick={()=>handlePrint(item,index)}
                      // onDoubleClick={setPrintSlip(true)}
                      ><ReactToPrint
                          // onBeforeGetContent={()=>handlePrint(item)}
                          // onClick={() => handlePrint(item)}
                          content={()=>reference.current}
                          // onSubmit={() => handlePrint(item)}
                          removeAfterPrint
                          trigger={() => (
                            <i
                              className="bi bi-printer"
                              style={{ cursor: "pointer" }}
                            ></i>
                          )}
                        />
                      </div>
                      <i
                        className="bi bi-trash-fill"
                        onClick={() => handledelete(item)}
                      ></i>
                    </div>
                    <div className="slip-page" ref={reference}>
                      <div className="slip-data">
                        <h4>Smart Parking System</h4>
                        <div className="ticket">
                          <h3>Parking Ticket</h3>
                          <div className="types">
                            <div className="data-new">
                              <p>Vehicle Type:</p>&nbsp;
                              <p>Car</p>
                            </div>
                            <div className="plate-new">
                              <p>Plate No:</p>&nbsp;
                              <p>{submitNo}</p>
                            </div>
                          </div>
                          <div className="fee">
                            <p>Fee:</p>&nbsp;
                            <p>50 PKR</p>
                          </div>
                          <div className="date">
                            <p>Date:</p>&nbsp;
                            <p>{date}</p>
                          </div>
                          <div className="time">
                            <p>Time:</p>&nbsp;
                            <p>{time}</p>
                          </div>
                          <div className="instructions">
                            <p>
                              Parking at your own risk.Smart parking will not be
                              responsible for any loss.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          {/* <ComponentToPrint ref={reference} submitNo={submitNo} /> */}
        </div>
      </Container>
    </div>
  );
}

export default Banner;
