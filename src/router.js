import React from 'react';
import Router from 'ampersand-router';
import styles from './styles/main.styl';
import ReposPage from './pages/repos';
import PublicPage from './pages/public';

export default Router.extend({
  routes: {
    '': 'public',
    'repos': 'repos'
  },

  // Route handlers
  public() {
    React.render(<PublicPage/>, document.body);

  },

  repos() {
    React.render(<ReposPage/>, document.body);

  }
});