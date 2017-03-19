import React, { Component } from 'react'
import { Link } from 'react-router'
import './Navigation.css'

class Navigation extends Component {
  render() {
    return (
      <nav className='navigation'>
        <ul>
          <li><Link className='navigation__link' activeClassName='navigation__link--active' onlyActiveOnIndex to='/'>home</Link></li>
          <li><Link className='navigation__link' activeClassName='navigation__link--active' to='/stats'>stats</Link></li>
          <li><Link className='navigation__link' activeClassName='navigation__link--active' to='/account'>account</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
