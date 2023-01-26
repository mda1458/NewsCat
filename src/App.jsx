import React, { Component } from 'react'
import NavBar from './components/Navbar'
import News from './components/News'
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<News category="Top 12 Headlines"/>}/>
          <Route path="/business" element={<News category="Business Headlines"/>} />
          <Route path="/sports" element={<News category="Sports Headlines"/>} />
          <Route path="/entertainment" element={<News category="Entertainment Headlines"/>} />
          <Route path="/health" element={<News category="Health Headlines"/>} />
          <Route path="/science" element={<News category="Science Headlines"/>} />
          <Route path="/technology" element={<News category="Technology Headlines"/>} />
        </Routes>
        <Footer/>
      </Router>
    )
  }
}
