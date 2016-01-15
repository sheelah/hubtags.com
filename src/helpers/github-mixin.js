import app from 'ampersand-app';

export default {
  ajaxConfig() {
    return {
      // Send token in XHR request header
      headers: {
        Authorization: 'token ' + app.me.token
      }
    }
  },
}