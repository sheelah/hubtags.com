import Router from './router';

window.app = {
  init() {
    this.router = new Router();
    this.router.history.start(); // instantiate the router
  }
};

window.app.init();