import React, { Component } from 'react';
import './App.css';
import './semantic-ui/dist/components/reset.min.css';
import './semantic-ui/dist/semantic.min.css';

import './semantic-ui/dist/components/grid.min.css';
import './semantic-ui/dist/components/container.min.css';
import './semantic-ui/dist/components/divider.min.css';
import './semantic-ui/dist/components/header.min.css';
import './semantic-ui/dist/components/site.min.css';

class TweetSlice extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      value: props.text
    }
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
        <div className="field">
          <textarea rows="4" value={ this.state.value } onChange={ this.onChange }></textarea>
        </div>
    );
  }
}

export default TweetSlice;
