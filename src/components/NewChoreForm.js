import React, { Component } from 'react'

export default class NewChoreForm extends Component {
  constructor(props) {
    super(props)

    this.state = { chore: '' }
  }

  handleChange(event) {
    this.setState({ chore: event.target.value })
  }

  render() {
    return (
      <div className="new-chore">
        <form className="new-chore__form">
          <textarea
            className="new-chore__form new-chore__input"
            value={this.state.chore}
            onChange={this.handleChange.bind(this)}
          />
          <button />
          <a />
        </form>
      </div>
    )
  }

}
