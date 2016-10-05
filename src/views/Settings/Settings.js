import React, { Component } from 'react';
import Setting from './Setting';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      config: props.config
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let _config = { ...this.state.config };

    if (e.target.name === 'ellipsesEnabled') {
      _config.ellipsesEnabled = !_config.ellipsesEnabled;
    } else {
      _config[e.target.name] = e.target.value;
    }

    this.setState({
      config: _config
    }, function() {
      this.props.updateParent(this.state);
    });
  }

  render() {
    // @NOTE: Wondering if the description for each param should be here. This is the view settings & should be in the view.
    const _descriptions = {
      paginationText: {
        displayName: 'Pagination Text',
        description: 'Change the template of the pagination of your tweets. You may include <code>$i</code> which will be replaced with the tweet\'s number out of the total, and <code>$n</code> which will be displayed as the total number of tweets.',
        defaultValue: '($i/$n)',
        inputType: 'textfield',
        enabled: true
      },
      delimiter: {
        displayName: 'Delimiter',
        description: 'Change how your tweet is separated into words. If your delimiter is not found, it may break inside words.',
        defaultValue: ' (single space)',
        inputType: 'textfield',
        enabled: false
      },
      maxPartsIndicator: {
        displayName: 'Max # of tweet parts',
        description: 'Show a warning when your tweetstorm exceeds this number of tweets. If it\'s set to 0, there is no maximum.',
        defaultValue: 0,
        inputType: 'textfield',
        enabled: false
      },
      ellipsesEnabled: {
        displayName: 'Enable trailing ellipses',
        description: 'Append <code>\'...\'</code> at the end of every tweet part, except for the last one, before the pagination.',
        defaultValue: true,
        inputType: 'checkbox',
        enabled: true
      },
      startingCount: {
        displayName: 'Starting Count',
        description: 'Start with a different number that isn\'t 1. The total will adjust, or you can change it in the pagination template.',
        defaultValue: 1,
        inputType: 'textfield',
        enabled: true
      },
    };

    // @NOTE: Should this be in render()?
    const settingDescs = (stateConfig, descriptions, onChangeFn) => {
      let _rows = [];

      for (const key of Object.keys(descriptions)) {
        if (!stateConfig.hasOwnProperty(key)) {
          throw new Error(`Error: Descriptions for params have no matching key in stateConfig object: ${key}`);
        }

        if (!descriptions[key].enabled) { continue; }

        _rows = _rows.concat(<Setting
                                name={ key }
                                key={ key }
                                onChange={ onChangeFn }
                                value={ stateConfig[key] }
                                { ...descriptions[key] } />); // Pass in the current state
      }

      return _rows;
    };

    return (
      <div className='ui grid top aligned internally celled'>
        { settingDescs(this.state.config, _descriptions, this.onChange) }
      </div>
    );
  }
}

export default Settings;
