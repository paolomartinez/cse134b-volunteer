import React from 'react';
import LoginPage from './components/LoginPage';
import Chat from './components/Chat';
import Confirmation from './components/Confirmation';
import Volunteer from './components/Volunteer';
import Dashboard from './components/Dashboard';
import Crud from './components/Crud';
import Profile from './components/Profile';
import { Link } from 'react-router-dom';

const Header = () => (
	<header>
	<nav>
      <ul>
        <li><Link to='/login'>LoginPage</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/chat'>Chat</Link></li>
        <li><Link to='/volunteer'>Volunteer</Link></li>
        <li><Link to='/crud'>Crud</Link></li>
        <li><Link to='/confirmation'>Confirmation</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        </ul>
	</nav>
	</header>
);

export default Header;