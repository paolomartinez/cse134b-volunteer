import React from 'react';
import '../css/dashboard.css';
import {Link} from 'react-router';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <title> Dashboard</title>
        <link type="text/css" rel="stylesheet" href="../styles/dashboard.css" />
        <meta charSet="UTF-8" />
        <h2> Welcome Back John! </h2>
        <div id="profile_picture">
          <img src="../images/profile.jpg" id="profile_image" alt="profile" />
        </div>
        <div className="links">
          <a href="login.html"> Log Out </a>
          <a href="profile.html"> View Profile </a>
        </div>
        <div id="dashboard_pic">
          <img src="../images/volunteers.jpg" id="dashboard_image" alt="volunteers" />
        </div>
        <div>
          <h1>See who needs volunteers in your area!</h1>
        </div>
        <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search area code" title="Type in a name" />
        <table id="myTable">
          <tbody><tr className="header">
              <td id="area_code_column">Area Code</td>
              <td id="name_column">Name</td>
              <td id="description_column">Description </td>
            </tr>
            <tr onclick="loadPage()">
              <td> 92123</td>
              <td>UCSD medical center </td>
              <td>
                <img src="../images/ucsd.png" className="org_images" alt="ucsd campus image" />
                <p>The University California, San Diego is one of the world's
                  leading public research universities, located in beautiful
                  La Jolla, California. </p>
              </td>
            </tr>
            <tr onclick="loadPage()">
              <td> 92144</td>
              <td>Anime Expo </td>
              <td>
                <img src="../images/animeexpo.jpg" className="org_images" alt="ucsd campus image" />
                <p>
                  Anime Expo is the largest celebration of Japanese pop culture
                  in North America! Join us in downtown LA on July 5-8,
                  2018, plus Pre-Show Night on July 4!
                </p>
              </td>
            </tr>
            <tr onclick="loadPage()">
              <td> 90122</td>
              <td>Facebook </td>
              <td>
                <img src="../images/facebook.jpg" className="org_images" alt="ucsd campus image" />
                <p>
                  Connect with friends, family and other people you know. Share
                  photos and videos, send messages and get updates.
                </p>
              </td>
            </tr>
            <tr onclick="loadPage()">
              <td> 92123</td>
              <td>Westfield Mall </td>
              <td>
                <img src="../images/ls.jpg" className="org_images" alt="ucsd campus image" />
                <p>
                  From organic living to the casual elegance of La Jolla,
                  Westfield UTC presents the ultimate resort shopping
                  experience. Located in the vibrant core of San Diego's
                  most affluent beach community,
                  Westfield UTC serves one of the most affluent trade
                  areas in the country.
                </p>
              </td>
            </tr>
          </tbody></table>
      </div>
    );
  }
}

export default Dashboard;