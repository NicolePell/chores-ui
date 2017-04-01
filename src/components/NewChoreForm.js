import React, { Component } from 'react'

export default class NewChoreForm extends Component {
  constructor(props) {
    super(props)

    this.state = { chore: '' }
  }

  handleChange(event) {
    this.setState({ chore: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({ chore: '' })
  }

  render() {
    return (
      <div className="new-chore">
        <form className="new_chore new-chore__form" onSubmit={this.handleSubmit.bind(this)} >
          <textarea
            className="new-chore__field"
            value={this.state.chore}
            onChange={this.handleChange.bind(this)}
          />
          <button className="new-chore__button" action="submit">Add</button>
        </form>
      </div>
    )
  }
}
