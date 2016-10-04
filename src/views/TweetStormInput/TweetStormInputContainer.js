import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import Samples from '../Samples';
import Settings from '../Settings';
import TweetStorm from '../../lib/tweetstormer';


class TweetStormInputContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
      slices: TweetStorm(props.text, props.config),
    };

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.props.updateParent(this.state);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.config && this.props.config !== newProps.config) {
      this.updateSlices(this.state.text, newProps.config);
    }
  }

  onChange(e) {
    this.updateSlices(e.target.value);
  }

  updateSlices(text, newConfig) {
    this.setState({
      text: text,
      slices: TweetStorm(text, newConfig || this.props.config)
    }, function() {
      this.props.updateParent(this.state);
    });
  }

  render() {
    return (
      <div>
        <div className='ui attached message'>
          <div className='header'>
            Your tweetstorm
          </div>
          <p>Input your tweetstorm here and it will automatically be formatted and numbered into tweets on the right.</p>
        </div>
        <div className='ui form attached fluid segment'>
          <div className='field'>
            <textarea rows='8' value={ this.state.text } onChange={ this.onChange } ></textarea>
          </div>
        </div>
        <div className='ui bottom attached info message'>
          <Accordion>
            <Accordion.Title className='title'>
              <Icon name='dropdown' />
              Advanced Settings
            </Accordion.Title>
            <Accordion.Content>
              <Settings { ...this.props.settings } />
            </Accordion.Content>
            <Accordion.Title className='title'>
              <Icon name='dropdown' />
              Sample Texts
            </Accordion.Title>
            <Accordion.Content>
              <Samples />
            </Accordion.Content>
          </Accordion>
        </div>
      </div>
    );
  }
}

export default TweetStormInputContainer;
