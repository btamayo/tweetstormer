import React, { Component } from 'react';
import './App.css';
import './semantic-ui/dist/components/reset.min.css';
import './semantic-ui/dist/semantic.min.css';

import './semantic-ui/dist/components/grid.min.css';
import './semantic-ui/dist/components/container.min.css';
import './semantic-ui/dist/components/divider.min.css';
import './semantic-ui/dist/components/header.min.css';
import './semantic-ui/dist/components/site.min.css';

import About from './About';
import LongTweetInputContainer from './LongTweetInputContainer';
import Samples from './Samples';
import Settings from './Settings';
import TweetSlicesContainer from './TweetSlicesContainer';

class App extends Component {
  constructor(props) {
    super(props);

    const initialText = "Type your tweet here!";
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
    }

    // This needs to be bound
    this.updateParent = this.updateParent.bind(this);
  }

  // Kinda wish this would take a { ... } op?
  updateParent(state) {
    this.setState({
      slices: state.slices ? state.slices : this.state.slices,
      config: state.config ? state.config : this.state.config,
      text: state.text ? state.text : this.state.text
    })
  }

  render() {
    return (
      <div className="App">
        <div className="ui container">

          <h1 className="ui dividing header">Tweetstormer</h1>
          <h3>Automatically transform your long tweet into a tweetstorm</h3>
          <p>You can also configure your tweetstorm in advanced settings</p>

          <div className="ui three column grid stackable">
            <div className="ten wide column">
              <LongTweetInputContainer updateParent={ this.updateParent }
                                       text={ this.state.text }
                                       config={ this.state.config } />

              <div className="ui one column grid vertically padded stackable">
                <div className="column wide">
                    <Settings text={ this.state.text }
                              updateParent={ this.updateParent }
                              config={ this.state.config } />
                    <div className="ui section divider"></div>
                    <Samples />
                </div>
              </div>
            </div>
            <div className="six wide column">
              <TweetSlicesContainer slices={ this.state.slices }
                                    maxPartsIndicator={ this.state.config.maxPartsIndicator } />
            </div>
          </div>
          <About />
        </div>
      </div>
    );
  }
}

export default App;
