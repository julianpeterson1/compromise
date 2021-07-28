import _methods from './methods/index.js'
import _model from './model/index.js'
import View from '../View.js'
import addMethods from './api/index.js'

// turn a string input into a 'document' json format
const tokenize = function (document, world) {
  const { methods, model } = world
  const { splitSentences, splitTerms, splitWhitespace, termNormalize, termAlias } = methods.tokenize
  if (typeof document === 'string') {
    // split into sentences
    let sentences = splitSentences(document, model)
    // split into word objects
    document = sentences.map(txt => {
      let terms = splitTerms(txt)
      terms = terms.map(str => {
        // split into [pre-text-post]
        let t = splitWhitespace(str)
        // add normalized term format
        t.normal = termNormalize(t.text)
        // support slashes, apostrophes, etc
        t = termAlias(t, model)
        return t
      })
      return terms
    })
  }
  return document
}

const plugin = function (world) {
  let { methods, model, parsers } = world
  Object.assign({}, methods, _methods)
  Object.assign(model, _model)
  parsers.push(tokenize)
  // extend View class
  addMethods(View)
}
export default plugin
