import React, { Component } from 'react'
import request from 'superagent'
import './Stats.css'

class Stats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allStats: ''
    }
  }
  // componentDidMount() {
  componentWillMount() {
    const apiUrl = 'https://monee-86652.firebaseio.com/.json'
    request
      .get(apiUrl)
      .end((error, result) => {
        if (error || !result.ok) {
          console.log('Error')
        } else {
          console.log('GET done')
          // const allStats = JSON.stringify(result.body)
          const allStats = result.body
          console.log(allStats);
          this.setState({ allStats })
        }
      })
  }

  render() {
    return (
      <section className='stats'>
        <h1>
          {JSON.stringify(this.state.allStats)}
        </h1>
      </section>
    )
  }
}

export default Stats
