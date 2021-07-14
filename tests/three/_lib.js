/* eslint-disable no-console */
import build from '../../builds/compromise-two.mjs'
import src from '../../src/two/index.js'
let nlp = src
if (process.env.TESTENV === 'prod') {
  console.warn('== production build test 🚀 ==')
  nlp = build
}
export default nlp
