import React, { Component } from 'react'
import './AddCost.css'

class AddCost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      costType: this.props.params.type,
      value: '',
      date: '',
      description: ''
    }
  }

  handleClick() {

  }
  render() {
    return (
      <section className='addCost'>
        <h1>
          {this.state.costType}
        </h1>
      </section>
    )
  }
}

export default AddCost
