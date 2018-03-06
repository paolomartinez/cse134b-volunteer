import React from 'react';
import {Link} from 'react-router';
import '../css/profileStyles.css';

class Profile extends React.Component {

  render() {
    return (
      <div>
        <title>Profile</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="../styles/profileStyles.css" />
        <style dangerouslySetInnerHTML={{__html: "\nhtml,body,h1,h2,h3,h4,h5 {font-family: \"Open Sans\", sans-serif}\n" }} />
        {/* Navbar */}
        <div className="w3-top">
          <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
            <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2" href="javascript:void(0);" onclick="openNav()"><i className="fa fa-bars" /></a>
            <a href="dashboard.html" className="w3-bar-item w3-button w3-padding-large w3-theme-d4"><i className="fa fa-home w3-margin-right" />Dashboard</a>
            {/*
  }
  <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="News"><i class="fa fa-globe"></i></a>
  <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Account Settings"><i class="fa fa-user"></i></a>
  <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Messages"><i class="fa fa-envelope"></i></a>
  <div class="w3-dropdown-hover w3-hide-small">
    <button class="w3-button w3-padding-large" title="Notifications"><i class="fa fa-bell"></i><span class="w3-badge w3-right w3-small w3-green">3</span></button>
    <div class="w3-dropdown-content w3-card-4 w3-bar-block" style="width:300px">
      <a href="#" class="w3-bar-item w3-button">One new friend request</a>
      <a href="#" class="w3-bar-item w3-button">John Doe posted on your wall</a>
      <a href="#" class="w3-bar-item w3-button">Jane likes your post</a>
    </div>
  </div>
*/}
            <a href="login.html" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="My Account">
              <img src="https://www.w3schools.com/w3images/avatar3.png" className="w3-circle" style={{height: 23, width: 23}} alt="Avatar" />Logout
            </a>
          </div>
        </div>
        {/* Navbar on small screens */}
        <div id="navDemo" className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large">
          <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 1</a>
          <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 2</a>
          <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 3</a>
          <a href="#" className="w3-bar-item w3-button w3-padding-large">My Profile</a>
        </div>
        {/* Page Container */}
        <div className="w3-container w3-content" style={{maxWidth: 1400, marginTop: 80}}>
          {/* The Grid */}
          <div className="w3-row">
            {/* Left Column */}
            <div className="w3-col m3">
              {/* Profile */}
              <div className="w3-card w3-round w3-white">
                <div className="w3-container">
                  <h4 className="w3-center">My Profile</h4>
                  <p className="w3-center"><img src="https://www.w3schools.com/w3images/avatar3.png" className="w3-circle" style={{height: 106, width: 106}} alt="Avatar" /></p>
                  <hr />
                  <p><i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme" /> Designer, UI</p>
                  <p><i className="fa fa-home fa-fw w3-margin-right w3-text-theme" /> San Diego, CA</p>
                  <p><i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme" /> April 1, 1988</p>
                </div>
              </div>
              <br />
              {/* Accordion */}
              <div className="w3-card w3-round">
                <div className="w3-white">
                  {/*
          <button onclick="displayDetail('Demo1')" class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-circle-o-notch fa-fw w3-margin-right"></i> My Groups</button>
          <div id="Demo1" class="w3-hide w3-container">
            <p>Some text..</p>
          </div>
        */}
                  <button onclick="displayDetail('Demo2')" className="w3-button w3-block w3-theme-l1 w3-left-align"><i className="fa fa-calendar-check-o fa-fw w3-margin-right" /> My Events</button>
                  <div id="Demo2" className="w3-hide w3-container">
                    {/* My Events */}
                    <div className="w3-card w3-round w3-white w3-hide-small">
                      <div className="w3-container">
                        <form action="javascript:void(0);" method="POST" onsubmit="app.Add()">
                          <input type="text" id="add-name" placeholder="Add event" />
                          <input type="submit" defaultValue="Add" />
                        </form>
                        <div id="spoiler" style={{display: 'none'}}>
                          <form action="javascript:void(0);" method="POST" id="saveEdit">
                            <input type="text" id="edit-name" />
                            <input type="submit" defaultValue="Edit" /> <a onclick="CloseInput()" aria-label="Close">✖</a>
                          </form>
                        </div>
                        <p id="counter" />
                        <table>
                          <tbody><tr>
                              <th>Name</th>
                            </tr>
                          </tbody><tbody id="events">
                          </tbody>
                        </table>
                        {/*
                <p>
                  <span class="w3-tag w3-small w3-theme-d5">News</span>
                  <span class="w3-tag w3-small w3-theme-d4">W3Schools</span>
                  <span class="w3-tag w3-small w3-theme-d3">Labels</span>
                  <span class="w3-tag w3-small w3-theme-d2">Games</span>
                  <span class="w3-tag w3-small w3-theme-d1">Friends</span>
                  <span class="w3-tag w3-small w3-theme">Games</span>
                  <span class="w3-tag w3-small w3-theme-l1">Friends</span>
                  <span class="w3-tag w3-small w3-theme-l2">Food</span>
                  <span class="w3-tag w3-small w3-theme-l3">Design</span>
                  <span class="w3-tag w3-small w3-theme-l4">Art</span>
                  <span class="w3-tag w3-small w3-theme-l5">Photos</span>
                </p>
              */}
                      </div>
                    </div>
                    <br />
                    <p>Some other text..</p>
                  </div>
                  <button onclick="displayDetail('Demo3')" className="w3-button w3-block w3-theme-l1 w3-left-align"><i className="fa fa-users fa-fw w3-margin-right" /> My Photos</button>
                  <div id="Demo3" className="w3-hide w3-container">
                    <div className="w3-row-padding">
                      <br />
                      <div className="w3-half">
                        <img src="https://www.w3schools.com/w3images/lights.jpg" style={{width: '100%'}} className="w3-margin-bottom" />
                      </div>
                      <div className="w3-half">
                        <img src="https://www.w3schools.com/w3images/nature.jpg" style={{width: '100%'}} className="w3-margin-bottom" />
                      </div>
                      <div className="w3-half">
                        <img src="https://www.w3schools.com/w3images/mountains.jpg" style={{width: '100%'}} className="w3-margin-bottom" />
                      </div>
                      <div className="w3-half">
                        <img src="https://www.w3schools.com/w3images/forest.jpg" style={{width: '100%'}} className="w3-margin-bottom" />
                      </div>
                      <div className="w3-half">
                        <img src="https://www.w3schools.com/w3images/nature.jpg" style={{width: '100%'}} className="w3-margin-bottom" />
                      </div>
                      <div className="w3-half">
                        <img src="https://www.w3schools.com/w3images/fjords.jpg" style={{width: '100%'}} className="w3-margin-bottom" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              {/* Interests */}
              <div className="w3-card w3-round w3-white w3-hide-small">
                <div className="w3-container">
                  <p>Interests</p>
                  <form action="javascript:void(0);" method="POST" onsubmit="app.Add()">
                    <input type="text" id="add-name" placeholder="Add interest" />
                    <input type="submit" defaultValue="Add" />
                  </form>
                  <div id="spoiler" style={{display: 'none'}}>
                    <form action="javascript:void(0);" method="POST" id="saveEdit">
                      <input type="text" id="edit-name" />
                      <input type="submit" defaultValue="Edit" /> <a onclick="CloseInput()" aria-label="Close">✖</a>
                    </form>
                  </div>
                  <p id="counter" />
                  <table>
                    <tbody><tr>
                        <th>Name</th>
                      </tr>
                    </tbody><tbody id="interests">
                    </tbody>
                  </table>
                  {/*
          <p>
            <span class="w3-tag w3-small w3-theme-d5">News</span>
            <span class="w3-tag w3-small w3-theme-d4">W3Schools</span>
            <span class="w3-tag w3-small w3-theme-d3">Labels</span>
            <span class="w3-tag w3-small w3-theme-d2">Games</span>
            <span class="w3-tag w3-small w3-theme-d1">Friends</span>
            <span class="w3-tag w3-small w3-theme">Games</span>
            <span class="w3-tag w3-small w3-theme-l1">Friends</span>
            <span class="w3-tag w3-small w3-theme-l2">Food</span>
            <span class="w3-tag w3-small w3-theme-l3">Design</span>
            <span class="w3-tag w3-small w3-theme-l4">Art</span>
            <span class="w3-tag w3-small w3-theme-l5">Photos</span>
          </p>
        */}
                </div>
              </div>
              <br />
              {/* Alert Box */}
              <div className="w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small">
                <span onclick="this.parentElement.style.display='none'" className="w3-button w3-theme-l3 w3-display-topright">
                  <i className="fa fa-remove" />
                </span>
                <p><strong>Hey!</strong></p>
                <p>People are looking at your profile. Find out who.</p>
              </div>
              {/* End Left Column */}
            </div>
            {/* Middle Column */}
            <div id="middleColumn" className="w3-col m7">
              <div className="w3-row-padding">
                <div className="w3-col m12">
                  <div className="w3-card w3-round w3-white">
                    <div className="w3-container w3-padding">
                      <form>
                        <input type="text" id="statusUpdate" className="w3-border w3-padding" placeholder="Status Update" /><br />
                        <button onclick="createPost(document.getElementById('statusUpdate').value)" type="button" className="w3-button w3-theme"><i className="fa fa-pencil" />Post</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div id="socialPost" className="w3-container w3-card w3-white w3-round w3-margin"><br />
                <img src="https://www.w3schools.com/w3images/avatar6.png" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{width: 60}} />
                <p> Have you seen this?</p>
                {/*
        <span class="w3-right w3-opacity">32 min</span>
        <h4>Angie Jane</h4><br>
        <hr class="w3-clear">
        <p>Have you seen this?</p>
        <img src="https://www.w3schools.com//w3images/nature.jpg" style="width:100%" class="w3-margin-bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i> Â Like</button>
        <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i> Â Comment</button>
      */}
              </div>
              {/*
      <div class="w3-container w3-card w3-white w3-round w3-margin"><br>
        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:60px">
        <span class="w3-right w3-opacity">1 min</span>
        <h4>John Doe</h4><br>
        <hr class="w3-clear">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div class="w3-row-padding" style="margin:0 -16px">
            <div class="w3-half">
              <img src="https://www.w3schools.com//w3images/lights.jpg" style="width:100%" alt="Northern Lights" class="w3-margin-bottom">
            </div>
            <div class="w3-half">
              <img src="https://www.w3schools.com//w3images/nature.jpg" style="width:100%" alt="Nature" class="w3-margin-bottom">
          </div>
        </div>
        <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i> Â Like</button>
        <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i> Â Comment</button>
      </div>

      <div class="w3-container w3-card w3-white w3-round w3-margin"><br>
        <img src="https://www.w3schools.com/w3images/avatar5.png" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:60px">
        <span class="w3-right w3-opacity">16 min</span>
        <h4>Jane Doe</h4><br>
        <hr class="w3-clear">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i> Â Like</button>
        <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i> Â Comment</button>
      </div>
*/}
              {/* End Middle Column */}
            </div>
            {/* Right Column */}
            <div className="w3-col m2">
              <div className="w3-card w3-round w3-white w3-center">
                <div className="w3-container">
                  <p>Upcoming Events:</p>
                  <img src="https://www.w3schools.com/w3images/forest.jpg" alt="Forest" style={{width: '100%'}} />
                  <p><strong>Holiday</strong></p>
                  <p>Friday 15:00</p>
                  <p><button className="w3-button w3-block w3-theme-l4">Info</button></p>
                </div>
              </div>
              <br />
              {/* End Right Column */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Page Container */}
        </div>
        <br />
        {/* Footer */}
        <footer className="w3-container w3-theme-d3 w3-padding-16">
          <h5>Footer</h5>
        </footer>
      </div>
    );
  }
}

export default Profile;