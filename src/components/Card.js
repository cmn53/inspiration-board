import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string,
    emoji: PropTypes.string,
    index: PropTypes.number.isRequired,
    deleteCardCallback: PropTypes.func.isRequired
  }

  onClickButton = () => {
    this.props.deleteCardCallback(this);
  }

  render() {
    return (
      <div className='card'>
        <div className='card__delete' onClick={this.onClickButton}>X</div>
        <div className='card__content'>
          <h1 className='card__content-text'>{this.props.text}</h1>
          <h1 className='card__content-emoji'>{emoji.getUnicode(`${this.props.emoji}`)}</h1>
        </div>
      </div>
    )
  }
}

export default Card;
