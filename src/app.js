import Router from './router';
import app from 'ampersand-app';

window.app = app;

app.extend({
  init() {
    this.router = new Router();
    this.router.history.start(); // instantiate the router
  }
});

app.init();