const App = require('ghost-app');

const ButtonsApp = App.extend({
  filters: {
    ghost_foot: 'handleGhostFoot'
  },

  handleGhostFoot: (ghost_foot) => ghost_foot.filter(item => (/jquery\.js/.test(item))),

  install: () => { console.log('installed app') },

  uninstall: () => { console.log('uninstalled app') },

  activate: () => { console.log('activated app') },

  deactivate: () => { console.log('deactivated app') },
});

module.exports = ButtonsApp;
