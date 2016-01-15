import Model from 'ampersand-model';

export default Model.extend({
  url: 'https://api.github.com/user',

  initialize() {
    this.token = window.localStorage.token;
    this.on('change:token', this.onTokenChange);
  },

  props: {
    id: 'number',
    login: 'string',
    avatar_url: 'string'
  },

  session: {
    token: 'string'
  },

  onTokenChange() {
    window.localStorage.token = this.token;
    this.fetchInitialData();
  },

  ajaxConfig() {
    return {
      // Send token in XHR request header
      headers: {
        Authorization: 'token ' + this.token
      }
    }
  },

  fetchInitialData() {
    // If user is logged in
    if (this.token) {
      // Call ampersand model's fetch method
      this.fetch();
    }
  }
});