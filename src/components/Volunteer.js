import React from 'react';
import {Link} from 'react-router';
import '../css/volunteer.css';

class Volunteer extends React.Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" href="../styles/volunteer.css" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Volunteer Event Description" />
        <meta name="author" content="Justin Meng" />
        <title> Volunteer For Us!</title>
        <h2 style={{textAlign: 'center'}}>
          Volunteer For Us!
        </h2>
        <div className="contact">
          <h3> <b>Contact Information</b> </h3>
        </div>
        <div className="contact_info">
          <p> Name*: Kaiser Permanente<br />
            Email*: kpcontact@kaiser.com<br />
            Number*: (480) 800-5139<br />
          </p>
        </div>
        <div className="description">
          <table className="volunteer">
            <tbody><tr className="volunteer_description">
                <td>
                  Here at Volunteering 4 Us you will have a set of jobs including: <br />
                </td>
              </tr>
              <tr>
                <td>
                  <ul className="jobs">
                    <li> Paperwork </li>
                    <li> Helping </li>
                    <li> Serving </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="required_hours">
                  Required Hours*: 25
                </td>
              </tr>
            </tbody></table>
        </div>
        <div className="shifts">
          <h3 className="schedule" id="hours"><b>Shifts Available:</b>
          </h3>
          <ul className="shift_hours">
            <li> Mon - Thurs 9:00 am - 8:00 pm </li>
            <li> Fri - Sat 9:00 am - 9:00 pm </li>
            <li> Sun 11:00 am - 5:00 pm </li>
          </ul>
        </div>
        <div>
          <p> By signing this document I am aware that I have provided
            information to the best of my knowledge and able to volunteer
            for the required amount of hours.
          </p>
          <div className="fillOut">
            <div className="signature">
              <label>Signature
                <input type="text" name="customer_signature" required />
              </label>
            </div>
            <div className="date">
              <label>Date
                <input type="text" name="current_date" required />
              </label>
            </div>
            <div className="register_now">
              <button id="register" input type="button" value="click" onclick="openConfirmation('confirmation.html')">Register now!
              </button>
            </div>
            <a href="chat.html">View Chat</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Volunteer;