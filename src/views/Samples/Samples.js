import React, { Component } from 'react';

class Samples extends Component {
  render() {
    let samples = [
      'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
      `Wayfarers unicorn fingerstache, hexagon subway tile typewriter shabby chic craft beer normcore farm-to-table post-ironic snackwave. Lo-fi asymmetrical ramps, fanny pack gastropub taxidermy freegan forage kickstarter wolf ugh seitan fam. Tofu taxidermy pork belly, twee listicle succulents pabst bushwick ethical. PBR&B flannel farm-to-table air plant, microdosing meggings kogi offal actually synth fap bicycle rights. Pinterest meditation keffiyeh tumblr fam skateboard lumbersexual, cred migas seitan portland fap pok pok actually. Beard lumbersexual vegan, art party thundercats retro waistcoat church-key affogato sustainable +1 ramps. Schlitz food truck irony, brunch pabst ennui PBR&B subway tile gastropub fap hammock try-hard mlkshk.

Pitchfork quinoa narwhal, kitsch pop-up banh mi yuccie. Chartreuse distillery viral, schlitz master cleanse yuccie hot chicken pop-up everyday carry. Brunch man bun poke locavore, pinterest flannel helvetica readymade plaid beard you probably haven't heard of them bitters post-ironic meditation. Cold-pressed poke heirloom semiotics knausgaard yr. Photo booth meditation tote bag venmo, kitsch raw denim polaroid schlitz coloring book semiotics echo park pour-over. Tote bag lyft chicharrones asymmetrical church-key. Snackwave ethical paleo +1 dreamcatcher.`
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
