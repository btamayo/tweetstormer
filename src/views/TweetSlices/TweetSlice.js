import React, { Component } from 'react';
import cx from 'classnames';
import { Card } from 'semantic-ui-react';

class TweetSlice extends Component {
  render() {
    let sliceClass = cx('ui bottom attached label', this.props.className);
    return (
      <div className='row'>
        <Card className={ this.props.isActiveCopy ? 'active-copy' : '' } fluid>
          <Card.Content style={{ paddingTop: '1rem', paddingBottom: '2rem' }}>
            <Card.Meta>
              #{ this.props.partNumber + 1 }
              <span className="right floated">
                <code>{ this.props.text.length } / 140</code>
              </span>
            </Card.Meta>
            <Card.Description style={{ padding: '1rem 0' }}>
              { this.props.text }
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className={ sliceClass }
                 data-clipboard-text={ this.props.text }
                 onClick={ this.props.onClick }
                 style={{ cursor: 'pointer', textAlign: 'center' }} >
              <span className="right floated">
                { this.props.isActiveCopy ? 'COPIED!' : 'COPY' }
              </span>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default TweetSlice;
