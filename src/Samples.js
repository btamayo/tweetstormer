import React, { Component } from 'react';
import './App.css';
import './semantic-ui/dist/components/reset.min.css';
import './semantic-ui/dist/semantic.min.css';

import './semantic-ui/dist/components/grid.min.css';
import './semantic-ui/dist/components/container.min.css';
import './semantic-ui/dist/components/divider.min.css';
import './semantic-ui/dist/components/header.min.css';
import './semantic-ui/dist/components/site.min.css';

class Samples extends Component {
  render() {
    let samples = [
      "Our story began almost 200 years ago when Cyrus and James Clark made a slipper from sheepskin off-cuts. At the time it was ground-breaking; a combination of invention and craftsmanship that's remained at the heart of what we do. And whilst now, as always, every pair of our shoes begins with a last carved by hand from a single block of hornbeam, advanced construction techniques, technologies and contemporary materials help us deliver perfection tailor-made for the modern world.",
      `Our solar system is located roughly three-quarters of the way to the Milky Way’s edge, says Reid. It takes the sun about 250 million years to make one rotation around the galaxy.

To measure the Local Arm, the team of scientists from five countries looked at radio wave emissions collected by the Very Long Baseline Array, a series of 10 radio telescopes that are spread out over a wide area, from Hawaii to the Virgin Islands. The telescopes are coordinated from a base in New Mexico.

In 2010, the telescopes were put to use in an ambitious project to better map the 3-D structure of our galaxy, with the goal of helping scientists better understand how it works. (See stunning photos of the Milky Way.)

"Since we are inside of it we can’t really see what it looks like," says Reid. "It's sort of like 500 years ago, when people wanted to know what the rest of the Earth looked like. So our project hopes to help us better understand the nature of the Milky Way by measuring distances between regions."`
    ];

    return (
      <div>
        <h3>Sample tweets</h3>
        <div className="ui form">
          <div className="field">
            <textarea rows="6" value={ samples[0] } readOnly></textarea>
          </div>
          <div className="field">
            <textarea rows="6" value={ samples[1] } readOnly></textarea>
          </div>
        </div>
      </div>
    );
  }
}

export default Samples;
