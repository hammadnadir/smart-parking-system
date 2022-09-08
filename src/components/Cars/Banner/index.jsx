import React, { useEffect, useRef, useState } from "react";
import { Container, Button, Modal, Form } from "react-bootstrap";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCars,
  addParkCar,
  removeParkCar,
  editParkCar,
  fetchCarById,
} from "../../../redux/cars";
import { useNavigate } from "react-router-dom";

function Banner({ inputText }) {
  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState([]);
  const [enterNo, setEnterNo] = useState(1);
  const [submitNo, setSubmitNo] = useState();
  const [spaces, setSpaces] = useState(100);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { parkCars, carById } = useSelector((state) => state.cars);

  console.log(carById);

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  useEffect(() => {
    setNewData(parkCars);
  }, [parkCars]);

  // const getCarsData = () => {
  //   const storedValues = localStorage.getItem("form");
  //   if (!storedValues) return [];
  //   return JSON.parse(storedValues);
  // };
  // const getQuantity = () => {
  //   const newValues = localStorage.getItem("numbers");
  //   if (!newValues) return 100;
  //   return JSON.parse(newValues);
  // };

  const reference = useRef(null);

  const handlePrint = (item, index) => {
    // setSubmitNo(item.number);
    // const abcd = item.number;
    // setSubmitNo(data[index].number);
    // console.log(submitNo);
    dispatch(fetchCarById(item));
    navigate("/slip")
  };

  const handledelete = (value) => {
    setSpaces(spaces + 1);
    console.log(value);
    dispatch(removeParkCar(value)).then(fetchCars());
  };

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
      setShow(false);
      setEnterNo("");
      setSpaces(spaces - 1);
      dispatch(addParkCar({ car_number: enterNo }));
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

  const handleEdit = async (value, index) => {
    setShow(true);
    setSpaces(spaces + 1);
    // const filtered = data.filter((abcd)=>abcd !== value)
    // setData(filtered)
    setEnterNo({});
    await dispatch(editParkCar(value));
  };

  return (
    <div className="main-data-page">
      <Container>
        <div className="space">{/* <h3>Avalible Space: {spaces}</h3> */}</div>
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
          {newData?.length > 0 &&
            newData
              // ?.filter((items) =>
              //   items.car_number.match(new RegExp(inputText, "i"))
              // )
              ?.map((item, index) => {
                return (
                  <div className="cars" key={index}>
                    <div className="numbers">
                      <h4>Number:</h4>&nbsp;
                      <h4>{item.car_number}</h4>
                    </div>
                    <div className="icones">
                      {/* <i
                        onClick={() => handleEdit(item, index)}
                        class="bi bi-pen"
                      ></i> */}
                      <div><i
                          className="bi bi-printer"
                          onClick={() => handlePrint(item, index)}
                          style={{ cursor: "pointer" }}
                        ></i>
                      </div>
                      <i
                        className="bi bi-trash-fill"
                        onClick={() => handledelete(item)}
                      ></i>
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
