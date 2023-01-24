import React, { Component } from 'react'
import './nav.css'
import { Link } from "react-router-dom"

// business entertainment general health science sports technology
export default class Navbar extends Component {
  actEvent = (e) => {
    // add active to current class and remove from other siblings class
    e.target.classList.add('activ');
    let siblings = e.target.parentElement.children;
    for (let i = 0; i < siblings.length; i++) {
      if (siblings[i] !== e.target) {
        siblings[i].classList.remove('activ')
      }
    }
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={()=>document.getElementById("first").click()}><img src="https://img.icons8.com/3d-fluency/94/null/pet-commands-follow.png" alt="" />NewsCat</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
            <Link className="nav-link colo activ" onClick={this.actEvent} to="/" id="first">Top Headlines 🔴</Link>
            <Link className="nav-link colo" onClick={this.actEvent} to="/business">Business 📈</Link>
            <Link className="nav-link colo" onClick={this.actEvent} to="/entertainment">Entertainment 🎪</Link>
            <Link className="nav-link colo" onClick={this.actEvent} to="/health">Health 💊</Link>
            <Link className="nav-link colo" onClick={this.actEvent} to="/science">Science ⚗️</Link>
            <Link className="nav-link colo" onClick={this.actEvent} to="/sports">Sports 🏏</Link>
            <Link className="nav-link colo" onClick={this.actEvent} to="/technology">Technology 🤖</Link>
          </div>
        </div>
      </nav>
    )
  }
}
