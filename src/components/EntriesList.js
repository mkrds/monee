import React, { Component } from 'react'

class EntriesList extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    const allEntries = this.props.data
    let allEntriesArray = []
    // I'm aware that the part below doesn't look pretty
    const entriesObjectToArrayDay = (o, year, month, day) => {
      Object.keys(o[year][month][day]).map((element) => {
        return allEntriesArray.push({
          key: element,
          year: o[year][month][day][element].year,
          month: o[year][month][day][element].month,
          day: o[year][month][day][element].day,
          costType: o[year][month][day][element].costType,
          value: o[year][month][day][element].value,
          description: o[year][month][day][element].description
        })
      })
    }

    const entriesObjectToArrayMonth = (o, year, month) => {
      Object.keys(o[year][month]).map((day) => {
        return entriesObjectToArrayDay(o, year, month, day)
      })
    }

    const entriesObjectToArrayYear = (o, year) => {
      Object.keys(o[year]).map((month) => {
        return entriesObjectToArrayMonth(o, year, month)
      })
    }

    const entriesObjectToArrayAll = (o) => {
      Object.keys(o).map((year) => {
        return entriesObjectToArrayYear (o, year)
      })
    }

    // if (allEntries.hasOwnProperty("2017")) {
      entriesObjectToArrayAll(allEntries)
    // }
    const listItems = allEntriesArray.map((entry, i) => (
        <h1 key={i}>{entry.value + '  /  ' + entry.key + '  /  ' + entry.year + '  /  ' + entry.month + '  /  ' + entry.day}</h1>
    ))

    return (
      <div>
        {listItems}
      </div>
    )
  }
}

export default EntriesList
