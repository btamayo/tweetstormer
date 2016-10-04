 /* eslint-disable */
 //@TODO: Add Prepend

let instance = null;

class TweetStorm {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance.main;
  }

  main(originalText, config = {}) {
    let { paginationText = `($i/$n)`,
          ellipses = '...',
          ellipsesEnabled = true,
          delimiter = ' ',
          maxParts = 999,
          startingCount = 1 } = config;

    let parts = [],
        final,
        remaining = true,
        text = `${originalText}`;

    let defaultTemplate = `${ellipses} ${paginationText}`,
        append = ellipsesEnabled ? defaultTemplate : ` ${paginationText}`, //Add space
        appendLength = append.length;


    // return immediately in an array of one tweet if it'll fit into a single tweet
    if (text.length <= 140) { return [text] };

    // offset is n-startingCount, but you cant start from a negative number
    let offset = (startingCount - 1 >= 0 ? startingCount - 1 : 0);

    while (remaining && parts.length < maxParts && maxParts !== 0) {
      /**
       * Once we've reached a total of 10 chars, our `n` (the total) is now +1 characters
       * because of the extra place val. But only if our template even has `n`.
       */
      if ((parts.length + offset) === 10 && paginationText.indexOf('$n') !== -1) {
        appendLength++;
      }

      // I don't think it will reach 100, we should put a max of 999 anyway.
      if ((parts.length + offset) === 100 && paginationText.indexOf('$n') !== -1) {
        appendLength++;
      }

      /**
       * If it's the last tweet that'll fit in 140-appendLength, then end it here.
       */
      if (text.length <= (140 - appendLength)) {
        remaining = false;

        // This is the last piece so +1 index and length.
        let _paginationText = paginationText.replace('$i', (parts.length + offset + 1));
        _paginationText = _paginationText.replace('$n', parts.length + offset+ 1);

        parts.push(text.concat(` ${_paginationText}`));
        break;
      }

      // Straight up maximum amount you can fit minus the appendLength
      let sample = text.substring(0, 140 - appendLength);

      // Get the index of the last space of the slice
      let delimIndex = sample.lastIndexOf(delimiter);

      let slice;

      // If there isn't a delimiter left, just cut it off at wherever it ends
      if (delimIndex === -1) {
        slice = sample;
        text = text.substring(slice.length);
      } else {
        // Get text from the beginning of substring (except chop off the delimiter) until the index of the last space
        slice = sample.substring(0, delimIndex);

        // Change what text is for next iteration, chop off delimiter
        text = text.substring(delimIndex + delimiter.length);
      }

      // Push to arr
      parts.push(slice);
    }

    // Change total in append str.
    append = append.replace('$n', parts.length + offset);

    // Go through array and append appender. It's 2n but more correct way of doing it.
    final = parts.map((part, index) => {
      // Add the counter, except for the last one which we added earlier already.
      return (index === parts.length - 1 ? part : part.concat(append.replace('$i', index + offset + 1)));
    });

    return final;
  }
}

instance = new TweetStorm();
export default instance;