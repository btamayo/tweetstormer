import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './semantic-ui/dist/components/reset.min.css';
import './semantic-ui/dist/semantic.min.css';

import './semantic-ui/dist/components/grid.min.css';
import './semantic-ui/dist/components/container.min.css';
import './semantic-ui/dist/components/divider.min.css';
import './semantic-ui/dist/components/header.min.css';
import './semantic-ui/dist/components/site.min.css';

import TweetStorm from './main';

class LongTweetInputContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
      slices: TweetStorm(props.text, props.config)
    };

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.props.updateParent(this.state);
  }

  onChange(e) {
    this.updateSlices(e.target.value);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.config && this.props.config !== newProps.config) {
      this.updateSlices(this.state.text, newProps.config);
    }
  }

  updateSlices(text, newConfig) {
    this.setState({
      text: text,
      slices: TweetStorm(text, newConfig || this.props.config)
    }, function() {
      this.props.updateParent(this.state);
    })
  }

  render() {
    return (
      <div className="ui form">
        <h3>Your long tweet:</h3>
        <div className="field">
          <textarea rows="5" value={ this.state.text } onChange={ this.onChange } ></textarea>
        </div>
      </div>
    )
  }
}

export default LongTweetInputContainer;
