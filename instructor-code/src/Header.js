import React, { Component } from 'react';
import Login from './Login';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="box" />
        <div className="box" />
        <div className="box login-container">
          <Login />
        </div>
        <div className="box" />
      </div>
    )
  }
};
