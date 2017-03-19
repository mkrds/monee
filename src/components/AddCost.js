import React, { Component } from 'react'
// import './AddCost.css'

class AddCost extends Component {
  render() {
    return (
      <section className='AddCost'>
        <h1>
          {this.props.params.type}
        </h1>
      </section>
    )
  }
}

export default AddCost
