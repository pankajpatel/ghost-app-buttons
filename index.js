const App = require('ghost-app');

const ButtonsApp = App.extend({
  filters: {
    ghost_foot: 'handleGhostFoot'
  },

  handleGhostFoot: (ghost_foot, _) => _.reject(ghost_foot, (item) => (/jquery\.js/.test(item)))
});

module.exports = ButtonsApp;
