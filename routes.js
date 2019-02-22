const routes = require('next-routes')

module.exports = routes()
  .add('subscribe')
  .add('unsubscribe')
  .add('newsletters')
  .add('newsletter', 'newsletters/:id')
