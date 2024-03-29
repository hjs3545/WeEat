import React, { useState } from 'react';
import './Header.css';
import Logo from '../assets/logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

function Header() {
  return (
    <>
      <div className="header">
        <img className="header_logo" src={Logo} alt="WeEat"/>
        <div className="header_search">
          <input className="header_searchInput" type="text"/>
          <SearchIcon className="header_searchIcon"/>
        </div>
        <div className="header_nav">
          <NavItem icon={<ChatBubbleOutlinedIcon className="nav_chatBubbleOutlinedIcon" fontSize="large"/>}/>
          <NavItem icon={<NotificationsIcon className="nav_notificationIcon" fontSize="large"/>}/>
          <NavItem icon={<AccountCircleIcon className="nav_accountCircleIcon" fontSize="large"/>}>
            <DropdownMenu></DropdownMenu>
          </NavItem>
        </div>
      </div>
    </>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav_item">
      <p onClick={() => setOpen(!open)}>
        {props.icon}
      </p>
      {open && props.children}
    </li>
  )
}

function DropdownMenu() {
  function DropdownItem(props) {
    return (
      <div className="menu_item">
        <span className="nav_icon">{props.leftIcon}</span>
        {props.children}
      </div>
    )
  }
  return (
    <div className="dropdown">
      <DropdownItem leftIcon={<AccountCircleOutlinedIcon/>}>프로필</DropdownItem>
      <DropdownItem leftIcon={<SettingsIcon/>}>설정</DropdownItem>
    </div>
  )
}

export default Header;