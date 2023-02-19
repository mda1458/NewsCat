import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div className='my-3'>
        <footer className="bg-dark text-light py-3">
            <p className="text-center">Made with ❤️ by <a style={{textDecoration:"none",color:"white"}} href="mda1458.github.io" target="_blank" rel="noreferrer">Muhammad Danish Azeem</a></p>
        </footer>
      </div>
    )
  }
}

export default Footer