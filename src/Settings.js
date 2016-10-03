import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './semantic-ui/dist/components/reset.min.css';
import './semantic-ui/dist/semantic.min.css';

import './semantic-ui/dist/components/grid.min.css';
import './semantic-ui/dist/components/container.min.css';
import './semantic-ui/dist/components/divider.min.css';
import './semantic-ui/dist/components/header.min.css';
import './semantic-ui/dist/components/site.min.css';


class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      config: props.config
    }

    this.updateParent = this.props.updateParent;
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let _config = { ...this.state.config },
        _currentText = this.props.text;

    if (e.target.name === "ellipsesEnabled") {
      _config.ellipsesEnabled = !_config.ellipsesEnabled;
    } else {
      _config[e.target.name] = e.target.value;
    }

    this.setState({
      config: _config
    }, function() {
      this.props.updateParent(this.state);
    })
  }

  render() {
    return (
      <div className="settings-container">
        <div className="ui container">
          <form className="ui form">
            <div className="three fields">
              <div className="field">
                <label>Pagination Text</label>
                <input type="text" name="paginationText" placeholder="Pagination Text" value={ this.state.config.paginationText } onChange={ this.onChange } />
              </div>
              <div className="field">
                <label>Delimiter</label>
                <input type="text" name="delimiter" placeholder="Delimiter" value={ this.state.config.delimiter } onChange={ this.onChange } />
              </div>
              <div className="field">
                <label>Max Parts</label>
                <input type="text" name="maxParts" placeholder="Max Parts" value={ this.state.config.maxParts } onChange={ this.onChange } />
              </div>
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input type="checkbox" onChange={ this.onChange } name="ellipsesEnabled" checked={ this.state.config.ellipsesEnabled } /> <label>Enable trailing ellipses</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Settings;
