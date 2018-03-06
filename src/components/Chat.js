import React from 'react';
import {Link} from 'react-router';
import '../css/chat.css';

class Chat extends React.Component {
  render() {
    return (
      <div>
        <title>Chat</title>
        <link type="text/css" rel="stylesheet" href="../styles/chat.css" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Volunteer Chat" />
        <meta name="author" content="Justin Meng" />
        <div className="wrapper" id="wrapper">
          <div className="menu">
            <p className="logout"><a id="exit" href="#">x</a></p>
            <div style={{clear: 'both'}} />
          </div>
          <div className="chatbox">
            <div className="chat-message-content" id="chat">
              <div className="userinfo">
                <div className="username"> 
                  <strong>Justin Meng</strong>
                </div>
                <div className="time">
                  11:24 a.m.
                </div>
              </div>
              <div className="usermessage">
                Hi, I heard that you guys have a volunteer position open for the hospital for the next few weeks
              </div>
              <hr />
              <div className="otheruserinfo">
                <div className="username">
                  <strong>Edwin Martinez</strong>
                </div>
                <div className="time">
                  11:26 a.m.
                </div>
              </div>
              <div className="otherusermessage">
                Yes, we have positions available for this, this, and this
              </div>
              <hr />
              <div className="userinfo">
                <div className="username"> 
                  <strong>Justin Meng</strong>
                </div>
                <div className="time">
                  11:34 a.m.
                </div>
              </div>
              <div className="usermessage">
                Great! Would you be free to talk over the phone?
              </div>
            </div>
          </div>
          <div className="submit">
            <label> 
              <input type="text" name="message" id="message" required />   
            </label> 
            <button type="button" id="submit" onclick="sendChat()">Send
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;