import Router from './router';
import styles from './styles/main.styl';
import icons from 'octicons/octicons/octicons.css';
import app from 'ampersand-app';
import Me from './models/me';

window.app = app;

// Extend ampersand app's functionality by adding init method
app.extend({
  init() {
    this.me = new Me();
    this.me.fetchInitialData();
    this.router = new Router();
    this.router.history.start(); // instantiate the router
  }
});

app.init();