import React, { Component } from 'react'
import "./main.scss"

export default class main extends Component {
  render() {
    return (
      <div className="main">
        <div className="owner">
          <span className="owner-msg">
            Are you the owner? Login to start!
          </span>
        </div>
        <div className="user">
          <span className="user-msg">
            Don't know what you want? We'll pick for you!
          </span>
          <div className="start-button">
            Let's get started!
          </div>
        </div>
      </div>
    )
  }
}
