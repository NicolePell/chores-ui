import React, { Component } from 'react'
import PropType from 'prop-types'


  export function renderChoreIcons() {
      return (
        <div className='NewChoreForm__icons col-xs-12'>
          <i className="fa fa-user" aria-hidden="true"></i>
          <i className="fa fa-calendar-plus-o" aria-hidden="true"></i>
          <i className="fa fa-repeat" aria-hidden="true"></i>
          <i className="fa fa-trophy" aria-hidden="true"></i>
          <i className="fa fa-tag" aria-hidden="true"></i>
        </div>
      )
  }

export default class NewChoreForm extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      chore: '',
      active: false
    }
  }

  handleChange(event) {
    this.setState({ chore: event.target.value })
  }

  handleClick(event) {
    this.setState({ active: true })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({ chore: '' })
  }

  render() {
    const { chore } = this.props

    return (
      <div className="NewChoreForm row">
        <form 
          className="NewChoreForm__form"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <div className="NewChoreForm__input-container row">
            <input
              className="NewChoreForm__input col-xs-12"
              placeholder="Add a chore..."
              value={this.state.chore}
              onChange={this.handleChange.bind(this)}
              onClick={this.handleClick.bind(this)}
              action="submit"
            />
          
            {this.state.active ? renderChoreIcons() : null}

          </div>
        </form>
      </div>
    )
  }
}

NewChoreForm.proptypes = {
  chores: PropType.string
}