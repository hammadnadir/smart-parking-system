import React, { useContext } from "react";
import "./styles.scss";

export class ComponentToPrint extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render(props) {
    
    const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    const today = new Date();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return (
      <div className="slip-page">
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
                <p>{this.props.submitNo}</p>
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
              <p>Parking at your own risk.Smart parking will not be responsible for any loss.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
