import React, { Component } from 'react'
import { Link } from 'react-router'
import './Home.css'

class Home extends Component {
  render() {
    const costTypes = [
      { text: 'health', icon: 'fa fa-heart' },
      { text: 'bills', icon: 'fa fa-home' },
      { text: 'gas', icon: 'fa fa-car' },
      { text: 'vacation', icon: 'fa fa-plane' },
      { text: 'lunch', icon: 'fa fa-coffee' },
      { text: 'groceries', icon: 'fa fa-shopping-cart' },
      { text: 'leisure', icon: 'fa fa-glass' },
      { text: 'Leisure', icon: 'fa fa-glass' },
    ]
    const listItems = costTypes.map((type, i) => (
      <Link key={i} className='cost__element' to={'/addcost/'+ type.text}>
        <i className={type.icon} aria-hidden="true"></i>
        <h1>{type.text}</h1>
      </Link>
    ))
    return (
      <section className='home'>
        <ul className='costList'>{listItems}</ul>
      </section>
    )
  }
}

export default Home
