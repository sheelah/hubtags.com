import Router from './router';
import app from 'ampersand-app';
import Me from './models/me';

window.app = app;

app.extend({
  init() {
    this.me = new Me();
    this.me.fetchInitialData();
    this.router = new Router();
    this.router.history.start(); // instantiate the router
  }
});

app.init();