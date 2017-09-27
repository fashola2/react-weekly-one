import React, {Component} from 'react'
import logo from '../logo.svg'

class NavBar extends Component{
  render(){
    return(
      <div className='mainHeader'>
        <div className="App-header">
          <img src={logo} className="App-logo" />
          <h1>Lets Boogie</h1>
        </div>
      </div>
    )
  }
}


export default NavBar
