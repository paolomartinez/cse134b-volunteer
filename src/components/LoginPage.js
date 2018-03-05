import React from 'react';
import {Link} from 'react-router';
import '../css/loginStyles.css';
import '../css/animate.css';

class LoginPage extends React.Component {
    render() {
        return (
          <div className="App">
            <h1>Welcome</h1>
            <div className="login-page">
                <div className="form">
                    <form className="register-form animated fadeIn">
                        <input type="text" name="username" placeholder="name" />
                        <input type="password" name="password" placeholder="password" />
                        <input type="text" name="email" placeholder="email address" />
                        <button>create</button>
                        <p className="message">Already registered? <a href="#">Sign In</a></p>
                    </form>
                    <form className="login-form animated fadeIn">
                        <input type="text" name="username" placeholder="username" />
                        <input type="password" name="password" placeholder="password" />
                        <a href="./other/dashboard.html">login</a>
                        <p className="message">Not registered? <a id="registerLink" href="#">Create an account</a></p>
                    </form>
                </div>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
            <script src="./js/loginScript.js"></script>
          </div>
        );
    }
}

export default LoginPage;