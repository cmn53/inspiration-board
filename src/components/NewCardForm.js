import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  static propTypes = {
    addCardCallback: PropTypes.func.isRequired
  };

  constructor() {
    super();

    this.state = {
        text: '',
        emoji: ''
    };
  }

  onInputChange = (event) => {
    let updatedInput = {};
    updatedInput[event.target.name] = event.target.value;
    this.setState(updatedInput);
  }

  onFormSubmit = (event) => {

    event.preventDefault();
    this.props.addCardCallback(this.state);

    this.setState({
      text: '',
      emoji: ''
    });
  }


  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <label htmlFor='text'>Text: </label>
          <input type='text'
            name='text'
            value={this.state.text}
            onChange={this.onInputChange}
          />
        </div>
        <div>
          <label htmlFor='emoji'>Emoji:
          <select name='emoji' value={this.state.emoji} onChange={this.onInputChange}>
            <option value=""></option>
            <option value="beer">Beer</option>
            <option value="heart_eyes">Heart Eyes</option>
            <option value="clap">Clap</option>
            <option value="dog">Dog</option>
          </select>
          </label>
        </div>
        <div>
          <input type="submit"/>
        </div>
      </form>
    );
  }
}

export default NewCardForm;
