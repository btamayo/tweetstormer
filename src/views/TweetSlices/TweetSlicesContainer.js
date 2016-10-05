import React, { Component } from 'react';
import Clipboard from 'clipboard/dist/clipboard.js';
import TweetSlice from './TweetSlice';

import cx from 'classnames';

class TweetSlicesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastCopiedIndex: -1,
      empty: false
    };
  }

  componentDidMount() {
    this.clip = new Clipboard('.copy');
    this.clip.on('success', (e) => {
      // console.log(`Copied: ${e.text}`);
    });
  }

  componentWillReceiveProps(props) {
    if (props.slices.length === 1 && props.slices[0].length === 0) {
      this.setState({
        empty: true
      })
    } else {
      this.setState({
        empty: false
      })
    }
  }

  componentWillUnmount() {
    this.clip.destroy();
  }

  updateActive(key) {
    this.setState({
      lastCopiedIndex: key
    });
  }

  render() {
    let overflowClassNames = (index, max) => {
      let sliceClasses = cx({
        'overflow': max > 0 && ((index + 1) > max),
        'active-copy': this.state.lastCopiedIndex === index
      });
      return sliceClasses;
    };

    return (
      <div>
        <div className='ui teal message'>
          <h3>Your tweet part(s): { this.state.empty ? 'None yet' : `${this.props.slices.length} total!` }</h3>
        </div>
        <div className='ui one column grid stackable padded'>
          {/* Key has to be item and not index so that it can differentiate */}
          { this.props.slices.length > 0
            && this.props.slices.map((item, key) => {
              return <TweetSlice key={ item }
                                 text={ item }
                                 partNumber={ key }
                                 isActiveCopy={ this.state.lastCopiedIndex === key }
                                 onClick={ this.updateActive.bind(this, key) }
                                 className={ overflowClassNames(key, this.props.maxPartsIndicator) } />;
            }
          )}
        </div>
      </div>
    );
  }
}

export default TweetSlicesContainer;
