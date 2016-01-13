import Router from 'ampersand-router';
import styles from './sass/main.scss';

export default Router.extend({
  routes: {
    '': 'public',
    'repos': 'repos'
  },

  // Route handlers
  public() {
    console.log('public page');

  },

  repos() {
    console.log('repos');

  }
});