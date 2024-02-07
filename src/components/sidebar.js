import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import "../styles/sidebar.css"

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Setting
      </a>
      <a className="menu-item" href="/salads">
        Mannual
      </a>
      <a className="menu-item" href="/pizzas">
        System
      </a>
      <a className="menu-item" href="/desserts">
        Depart
      </a>
    </Menu>
  );
};