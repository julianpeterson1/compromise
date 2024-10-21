/* eslint-disable regexp/no-dupe-characters-character-class */

// merge embedded quotes into 1 sentence
// like - 'he said "no!" and left.'
const MAX_QUOTE = 280 // ¯\_(ツ)_/¯

// don't support single-quotes for multi-sentences
const pairs = {
  '\u0022': '\u0022', // 'StraightDoubleQuotes'
  '\uFF02': '\uFF02', // 'StraightDoubleQuotesWide'
  // '\u0027': '\u0027', // 'StraightSingleQuotes'
  '\u201C': '\u201D', // 'CommaDoubleQuotes'
  // '\u2018': '\u2019', // 'CommaSingleQuotes'
  '\u201F': '\u201D', // 'CurlyDoubleQuotesReversed'
  // '\u201B': '\u2019', // 'CurlySingleQuotesReversed'
  '\u201E': '\u201D', // 'LowCurlyDoubleQuotes'
  '\u2E42': '\u201D', // 'LowCurlyDoubleQuotesReversed'
  '\u201A': '\u2019', // 'LowCurlySingleQuotes'
  '\u00AB': '\u00BB', // 'AngleDoubleQuotes'
  '\u2039': '\u203A', // 'AngleSingleQuotes'
  '\u2035': '\u2032', // 'PrimeSingleQuotes'
  '\u2036': '\u2033', // 'PrimeDoubleQuotes'
  '\u2037': '\u2034', // 'PrimeTripleQuotes'
  '\u301D': '\u301E', // 'PrimeDoubleQuotes'
  // '\u0060': '\u00B4', // 'PrimeSingleQuotes'
  '\u301F': '\u301E', // 'LowPrimeDoubleQuotesReversed'
}
const openQuote = RegExp('[' + Object.keys(pairs).join('') + ']', 'g')
const closeQuote = RegExp('[' + Object.values(pairs).join('') + ']', 'g')

const closesQuote = function (str) {
  if (!str) {
    return false
  }
  let m = str.match(closeQuote)
  if (m !== null && m.length === 1) {
    return true
  }
  return false
}

// allow micro-sentences when inside a quotation, like:
// the doc said "no sir. i will not beg" and walked away.
const conjunctions = [
  'and',
  'but',
  'or',
  'nor',
  'so',
  'for',
  'yet',
  'although',
  'because',
  'since',
  'unless',
  'while',
  'whereas',
  'even though',
  'even if',
  'if',
  'though',
  'before',
  'after',
  'as',
  'as if',
  'as long as',
  'as soon as',
  'as though',
  'once',
  'whether',
  'until',
  'till',
  'where',
  'when',
  'whenever',
  'wherever',
  'both',
  'either',
  'neither',
  'not only',
  'whether or not',
]

const speechVerbs = [
  'said',
  'replied',
  'asked',
  'shouted',
  'whispered',
  'remarked',
  'stated',
  'cried',
  'murmured',
  'exclaimed',
  'responded',
  'answered',
  'admitted',
  'agreed',
  'announced',
  'argued',
  'begged',
  'boasted',
  'commented',
  'complained',
  'declared',
  'denied',
  'explained',
  'expressed',
  'insisted',
  'interrupted',
  'joked',
  'laughed',
  'mentioned',
  'noted',
  'observed',
  'promised',
  'protested',
  'reminded',
  'repeated',
  'retorted',
  'reassured',
  'warned',
  'yelled',
  'groaned',
  'muttered',
  'hissed',
  'shrieked',
  'snapped',
  'sobbed',
  'grumbled',
  'sighed',
  'cautioned',
  'mocked',
  'teased',
  'urged',
  'ventured',
  'whimpered',
  'whined',
  'whistled',
  'mused',
  'offered',
  'proclaimed',
  'sneered',
  'thundered',
  'vowed',
  'mumbled',
  'barked',
]

const quoteMerge = function (splits) {
  let arr = []
  for (let i = 0; i < splits.length; i += 1) {
    let split = splits[i]

    // Find all open and close quotes
    let openMatches = [...split.matchAll(openQuote)]
    let closeMatches = [...split.matchAll(closeQuote)]

    if (openMatches.length > 0 && closeMatches.length > 0) {
      let openIdx = openMatches[0].index

      // Find the correct closing quote
      let closeIdx = closeMatches.find(c => c.index > openIdx && pairs[split[openIdx]] === split[c.index])?.index

      if (closeIdx !== undefined) {
        let quoteEndIndex = closeIdx + 1 // Include the closing quote
        let beforeQuote = split.slice(0, quoteEndIndex).trim()
        let afterQuote = split.slice(quoteEndIndex).trim()

        // Check if the next part starts with a conjunction or a speech verb
        let afterQuoteFirstWord = afterQuote.split(' ')[0].toLowerCase()

        // Do not split if the word after the quote is a conjunction or a speech verb
        if (conjunctions.includes(afterQuoteFirstWord) || speechVerbs.includes(afterQuoteFirstWord)) {
          arr.push(split)
          continue
        }

        // Check for punctuation inside the quote
        let quoteContent = split.slice(openIdx, closeIdx + 1)
        let punctuationInsideQuote = quoteContent.match(/[.!?]/g) || []

        if (punctuationInsideQuote.length > 1 && split.length < MAX_QUOTE) {
          arr.push(split)
          continue
        }

        // Otherwise, split into two sentences
        if (beforeQuote && afterQuote) {
          arr.push(beforeQuote)
          arr.push(afterQuote)
          continue
        }
      }
    }

    // Original merging logic for nested quotes
    let m = split.match(openQuote)
    if (m !== null && m.length === 1) {
      if (closesQuote(splits[i + 1]) && splits[i + 1].length < MAX_QUOTE) {
        splits[i] += splits[i + 1] // Merge them
        arr.push(splits[i])
        splits[i + 1] = ''
        i += 1
        continue
      }
      if (closesQuote(splits[i + 2])) {
        let toAdd = splits[i + 1] + splits[i + 2] // Merge them all
        if (toAdd.length < MAX_QUOTE) {
          splits[i] += toAdd
          arr.push(splits[i])
          splits[i + 1] = ''
          splits[i + 2] = ''
          i += 2
          continue
        }
      }
    }

    // Push the current split
    arr.push(splits[i])
  }

  return arr
}
export default quoteMerge
