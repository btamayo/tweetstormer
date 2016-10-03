import React, { Component } from 'react';
import './App.css';
import './semantic-ui/dist/components/reset.min.css';
import './semantic-ui/dist/semantic.min.css';

import './semantic-ui/dist/components/grid.min.css';
import './semantic-ui/dist/components/container.min.css';
import './semantic-ui/dist/components/divider.min.css';
import './semantic-ui/dist/components/header.min.css';
import './semantic-ui/dist/components/site.min.css';

import cx from 'classnames';

class TweetSlice extends Component {
  render() {
    let sliceClass = cx('field', this.props.className);
    return (
        <div className={ sliceClass } style={{ position: 'relative' }} onClick={ this.props.onClick }>
          <textarea rows="4" value={ this.props.text } readOnly></textarea>
          <div className="ui bottom right attached label copy"
               data-clipboard-text={ this.props.text }
               style={{ cursor: 'pointer' }} >Copy</div>
        </div>
    );
  }
}

export default TweetSlice;
