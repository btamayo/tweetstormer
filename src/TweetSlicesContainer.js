import React, { Component } from 'react';
import './App.css';
import './semantic-ui/dist/components/reset.min.css';
import './semantic-ui/dist/semantic.min.css';

import './semantic-ui/dist/components/grid.min.css';
import './semantic-ui/dist/components/container.min.css';
import './semantic-ui/dist/components/divider.min.css';
import './semantic-ui/dist/components/header.min.css';
import './semantic-ui/dist/components/site.min.css';

import TweetSlice from './TweetSlice';

class TweetSlicesContainer extends Component {
  render() {
    return (
      <div className="ui one column grid stackable">
        <div className="column wide">
          <h3>Your tweet part(s): {this.props.slices.length} total!</h3>
          {/* Key has to be item and not index so that it can differentiate */}
          <div className="ui form">

          { this.props.slices.length > 0 && this.props.slices.map((item, key) => {
              return <TweetSlice key={ item } text={ item } />
          }) }
          </div>
        </div>
      </div>
    )
  }
}

export default TweetSlicesContainer;
