//@NOTE: This isn't a generalizable component. How should I place this in my project?

import React, { Component } from 'react';
import '../App.css';
import '../semantic-ui/dist/components/reset.min.css';
import '../semantic-ui/dist/semantic.min.css';

import '../semantic-ui/dist/components/grid.min.css';
import '../semantic-ui/dist/components/container.min.css';
import '../semantic-ui/dist/components/divider.min.css';
import '../semantic-ui/dist/components/header.min.css';
import '../semantic-ui/dist/components/site.min.css';

import { Row, Column } from './Grid';

class SettingTextField extends Component {
  render() {
    return (
      <div className="ui form">
        <div className="field">
          <label>{ this.props.displayName }</label>
          <input type="text" name={ this.props.name }
                             placeholder={ this.props.label }
                             value={ this.props.value }
                             onChange={ this.props.onChange } />
        </div>
      </div>
    );
  }
}

class SettingCheckbox extends Component {
  render() {
    return (
      <div className="field">
        <div className="ui checkbox">
          <input type="checkbox" name={ this.props.name }
                                 checked={ this.props.value }
                                 onChange={ this.props.onChange } />
          <label>{ this.props.displayName }</label>
        </div>
      </div>
    )
  }
}

SettingCheckbox.propTypes = {
  onChange: React.PropTypes.func.isRequired
}

class Setting extends Component {
  render() {
    /* For any extra formatting of booleans, or strings, etc. */
    const formatInput = (input) => {
      if (typeof input === 'boolean') {
        return input ? 'enabled' : 'disabled'
      }

      return input;
    }

    return (
      <Row>
        <Column className='five wide'>
          { this.props.inputType === 'textfield' && <SettingTextField { ...this.props } /> }
          { this.props.inputType === 'checkbox' && <SettingCheckbox { ...this.props } /> }
        </Column>
        <Column className='eleven wide'>
          <div dangerouslySetInnerHTML={{ __html: this.props.description }} />
          <br /><br />
          {/* This isn't super generalizable, really only accounts for bools and strings. */}
          Default: <code>{ formatInput(this.props.defaultValue) }</code>
          Current: <code>{ formatInput(this.props.value) }</code>
        </Column>
      </Row>
    )
  }
}

export default Setting;