import React, { Component } from 'react';

// @NOTE: Do I have to pass this in every time?s
import '../semantic-ui/dist/components/reset.min.css';
import '../semantic-ui/dist/semantic.min.css';

// @NOTE: I'm confused about how to import styles. What is props.children needs other styles? What if I pass in a className that needs other styles?
import '../semantic-ui/dist/components/grid.min.css';
import '../semantic-ui/dist/components/container.min.css';
import '../semantic-ui/dist/components/site.min.css';

import cx from 'classnames';

class Row extends Component {
  render() {
    return (
      <div className={ cx('row', this.props.className) }>
        { this.props.children }
      </div>
    )
  }
}

class Column extends Component {
  render() {
    return (
      <div className={ cx('column', this.props.className) }>
        { this.props.children }
      </div>
    )
  }
}

export { Row, Column }