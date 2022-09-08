import React, { useRef } from "react";
import "./styles.scss";
import {
  fetchCars,
  addParkCar,
  removeParkCar,
  editParkCar,
  fetchCarById,
} from "../../redux/cars";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import ReactToPrint from "react-to-print";

function Slip() {

  const dispatch = useDispatch();
  const reference = useRef();

  const { parkCars, carById } = useSelector((state) => state.cars);

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  const reactToPrintContent = React.useCallback(() => {
    return reference.current;
  }, [reference.current]);

  return (
    <div>
      <div className="btn-div">
      <ReactToPrint 
      trigger={()=><Button>Print Slip</Button>
    }
    content={reactToPrintContent}
    />
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
                <p>{carById?.car_number}</p>
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
                Parking at your own risk.Smart parking will not be responsible
                for any loss.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slip;
