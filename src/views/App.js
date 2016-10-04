import React, { Component } from 'react';
import About from './About';
import TweetStormInput from './TweetStormInput';
import TweetSlices from './TweetSlices';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const initialText = 'This is a placeholder for what will be your tweet. You can type in here and the results will automatically appear on the right and you can click the Copy button to copy a single tweet. Or, you can copy and paste sample ipsum text from the Sample Texts section below! If you\'d like to tweak some settings. you can expand the Settings section.';

    const initialConfig = {
      paginationText: '($i/$n)',
      startingCount: 1,
      ellipses: '...',
      ellipsesEnabled: true,
      delimiter: ' ',
      maxParts: 50,
      maxPartsIndicator: 0
    };

    this.state = {
      slices: [],
      config: initialConfig,
      text: initialText
    };

    // This needs to be bound
    this.updateParent = this.updateParent.bind(this);
  }

  // Kinda wish this would take a { ... } op?
  updateParent(state) {
    this.setState({
      slices: state.slices ? state.slices : this.state.slices,
      config: state.config ? state.config : this.state.config,
      text: state.text ? state.text : this.state.text
    });
  }

  render() {
    let _settingsState = {
      text: this.state.text,
      updateParent: this.updateParent,
      config: this.state.config
    };

    return (
      <div className='App'>
        <div className='ui container'>
          <h1 className='ui header'>TWEETSTORMER <span style={{ fontSize: '0.5em', color: '#989898' }}>0.1.0</span></h1>
          <h3 className='ui header'>Automatically transform your long tweet into a tweetstorm</h3>
          <div className='ui hidden divider' style={{ margin: '2rem 0' }}></div>

          <div className='ui three column grid stackable'>
            <div className='ten wide column'>
              <TweetStormInput updateParent={ this.updateParent }
                               text={ this.state.text }
                               config={ this.state.config }
                               settings={ _settingsState } />
            </div>
            <div className='six wide column'>
              <TweetSlices slices={ this.state.slices }
                           maxPartsIndicator={ this.state.config.maxPartsIndicator } />
            </div>
          </div>
        </div>
        <About />
      </div>
    );
  }
}

export default App;
