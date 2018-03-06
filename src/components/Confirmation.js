import React from 'react';
import {Link} from 'react-router';
import '../css/confirmation.css';

class Confirmation extends React.Component {

  render() {
    return (
      <div>
        <link rel="stylesheet" href="../styles/confirmation.css" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Volunteer Confirmation" />
        <meta name="author" content="Justin Meng" />
        <title> Confirm Registration </title>
        <div className="wrapper">
          <div className="title">
            <h3 style={{textAlign: 'center'}}>Volunteer For Us!</h3>
          </div>
          <div className="separator0" style={{display: 'block'}} />
          <div className="description">
            Register for this opportunity now!
          </div>
          <div className="buttons">
            <div className="go_back">
              <button id="go_back" type="button" onclick="closePopUp()">Back
              </button>
            </div>
            <div className="popup">
              <button id="confirmation" type="button" onclick="popUpConfirm()">Confirm
                <span className="popuptext" id="myPopup">Registered!</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirmation;