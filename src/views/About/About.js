import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

class About extends Component {
  render() {
    return (
        <div className="ui vertical footer segment">
          <div className="ui centered container segment inverted" style={{ backgroundColor: '#fff', fontSize: '.9em' }}>
            <div className="ui stackable centered equal height stackable grid">
              <div className="five wide column" style={{ color: '#585858', textAlign: 'center' }}>
                Made with <span style={{ fontSize: '1.3em', color: 'red' }}>♥</span> by <a href="https://twitter.com/__biancat"><b>@__biancat</b></a> &nbsp;
                <a href="https://twitter.com/__biancat">
                  <Icon name='twitter' />
                </a>
                <a href="https://github.com/btamayo">
                  <Icon name='github' />
                </a>
                <br />
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default About;
