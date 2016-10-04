import React, { Component } from 'react';
import cx from 'classnames';

class Row extends Component {
  render() {
    return (
      <div className={ cx('row', this.props.className) }>
        { this.props.children }
      </div>
    );
  }
}

class Column extends Component {
  render() {
    return (
      <div className={ cx('column', this.props.className) }>
        { this.props.children }
      </div>
    );
  }
}

export { Row, Column };