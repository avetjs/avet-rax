'use strict';

const moduleAlias = require('module-alias');

module.exports = app => {
  // For the development version, we'll use React.
  // Because, it support react hot loading and so on.
  if (app.env === 'local') {
    moduleAlias.addAlias('react', 'rax');
    moduleAlias.addAlias('react-dom', 'rax-dom');
    moduleAlias.addAlias('react-dom/server', 'rax-server-renderer')
  }
}
