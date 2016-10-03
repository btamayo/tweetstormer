import React, { Component } from 'react';
import './App.css';
import './semantic-ui/dist/components/reset.min.css';
import './semantic-ui/dist/semantic.min.css';

import './semantic-ui/dist/components/grid.min.css';
import './semantic-ui/dist/components/container.min.css';
import './semantic-ui/dist/components/divider.min.css';
import './semantic-ui/dist/components/header.min.css';
import './semantic-ui/dist/components/site.min.css';

import Clipboard from 'clipboard/dist/clipboard.js';
import cx from 'classnames';
import TweetSlice from './TweetSlice';

class TweetSlicesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastCopiedIndex: -1
    }
  }

  componentDidMount() {
    this.clip = new Clipboard('.copy');
    this.clip.on('success', (e) => {
      console.log(`Copied: ${e.text}`);
    })
  }

  componentWillUnmount() {
    this.clip.destroy();
  }

  updateActive(key, items) {
    this.setState({
      lastCopiedIndex: key
    })
  }

  render() {
    let overflowClassNames = (index, max) => {
      let sliceClasses = cx({
        'overflow': max > 0 && ((index + 1) > max),
        'active-copy': this.state.lastCopiedIndex === index
      })
      return sliceClasses;
    }

    return (
      <div className="ui one column grid stackable">
        <div className="column wide">
          <h3>Your tweet part(s): { this.props.slices.length || 0 } total!</h3>
          {/* Key has to be item and not index so that it can differentiate */}
          <div className="ui form">
            { this.props.slices.length > 0 && this.props.slices.map((item, key) => {
                return <TweetSlice key={ item }
                                   text={ item }
                                   onClick={ this.updateActive.bind(this, key) }
                                   className={ overflowClassNames(key, this.props.maxPartsIndicator) } />
            }) }
          </div>
        </div>
      </div>
    )
  }
}

export default TweetSlicesContainer;
