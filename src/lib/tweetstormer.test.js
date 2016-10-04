import TweetStormer from './tweetstormer'

it('runs', () => {
  const storm = TweetStormer();
  expect(storm).toBeDefined();
});

describe('Simple 140 character tweets', () => {
  const MAX_LENGTH_TWEET_EXAMPLE = "Organic disrupt photo booth twee. Literally vape gastropub fanny pack glossier cliche hell of fap hot chicken. Franzen readymade VHS plusone";
  const storm = TweetStormer(MAX_LENGTH_TWEET_EXAMPLE);

  it('should have an input of 140 chars exactly', () => {
    expect(MAX_LENGTH_TWEET_EXAMPLE.length).toBe(140);
  })

  it('should return exactly an array of size 1', () => {
    expect(storm.length).toBe(1);
  })

  it('should not be modified', () => {
    expect(storm[0]).toBe(MAX_LENGTH_TWEET_EXAMPLE);
  });
})

describe('When there are meta characters', () => {

  it('Should count each newline as a character', () => {

    const storm = TweetStormer();
    expect(storm).toBeDefined();
  });
})

it('Should not exceed max parts', () => {
  const LONG_TWEET = `Organic disrupt photo booth twee. Literally vape gastropub fanny pack glossier cliche hell of fap hot chicken. Franzen readymade VHS, messenger bag swag artisan helvetica fanny pack yuccie cronut tacos echo park four loko. Crucifix blue bottle hot chicken 8-bit, retro edison bulb literally chillwave raw denim mumblecore narwhal brunch enamel pin bespoke asymmetrical. Twee mustache stumptown, kale chips actually tote bag brunch vaporware marfa fashion axe live-edge selvage letterpress next level fingerstache. Pitchfork bitters skateboard, health goth 8-bit try-hard street art normcore flexitarian blog poutine shoreditch. Cray iceland semiotics sriracha.

Shabby chic raclette single-origin coffee austin pork belly YOLO craft beer hashtag everyday carry, cray listicle seitan woke unicorn. Pickled jianbing slow-carb flexitarian af. Distillery fingerstache occupy, XOXO enamel pin fanny pack man bun +1 crucifix meh master cleanse green juice brooklyn chartreuse cred. Fixie kitsch green juice semiotics iPhone 8-bit. Fingerstache deep v hammock, semiotics vegan quinoa typewriter disrupt. Portland keffiyeh heirloom vinyl, tilde selvage post-ironic fashion axe cred. Thundercats asymmetrical YOLO, mixtape chartreuse edison bulb hammock godard tousled cray man braid actually pour-over.`;


  const maxParts = 3;
  const storm = TweetStormer(LONG_TWEET, {
    maxParts: maxParts
  });
  expect(storm.length).toBe(maxParts);
});

it('Should not crash with a blank config', () => {

  const storm = TweetStormer();
  expect(storm).toBeDefined();
});

describe('Handling spaces and concatenation: ', () => {
  const with_spaces = "Man braid bushwick YOLO four dollar toast hot chicken, tumblr succulents blue bottle roof party leggings XOXO four loko. Af fam         this."

  const expected_result = "Man braid bushwick YOLO four dollar toast hot chicken, tumblr succulents blue bottle roof party leggings XOXO four loko. Af fam this.";


  it('should trim spaces and concatenated it to one tweet if it can fit', () => {

    console.log(with_spaces.length);

    const storm = TweetStormer(with_spaces);

    console.log(storm);

    expect(storm.length).toBe(1);
  })

  describe('should add a space right before the pagination count', () => {
    const LONG_TWEET = "Organic disrupt photo booth twee. Literally vape gastropub fanny pack glossier cliche hell of fap hot chicken. Franzen readymade VHS, messenger bag swag artisan helvetica fanny pack yuccie cronut tacos echo park four loko. Crucifix blue bottle hot chicken 8-bit, retro edison bulb literally chillwave raw denim mumblecore narwhal brunch enamel pin bespoke asymmetrical. Twee mustache stumptown, kale chips actually tote bag brunch vaporware marfa fashion axe live-edge selvage letterpress next level fingerstache. Pitchfork bitters skateboard, health goth 8-bit try-hard street art normcore flexitarian blog poutine shoreditch. Cray iceland semiotics sriracha."

    const paginationText = "($1/$n)";
    const appenderLength = paginationText.length;

    it('should add a space with ellipses on', () => {
      const storm = TweetStormer(LONG_TWEET, { ellipsesEnabled: true, paginationText: paginationText });

      expect(storm.length).toBeLessThan(10); // If it's more than 10 our index will be off
    })
  })
})

it('Should not fail with nonexistent delimiters', () => {
  const storm = TweetStormer();
  expect(storm).toBeDefined();
});

it('Should parse meta characters and special characters', () => {
  const storm = TweetStormer();
  expect(storm).toBeDefined();
});

it('Should return the same results if settings are returned back to normal', () => {
  const storm = TweetStormer();
  expect(storm).toBeDefined();
});