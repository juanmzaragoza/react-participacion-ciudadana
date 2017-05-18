if (process.env.NODE_ENV === 'production') {
  module.exports = require('components/Root.prod')
} else {
  module.exports = require('components/Root.dev')
}
