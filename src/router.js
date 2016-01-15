import React from 'react';
import app from 'ampersand-app';
import qs from 'qs';
import xhr from 'xhr';
import Router from 'ampersand-router';
import styles from './styles/main.styl';
import ReposPage from './pages/repos';
import PublicPage from './pages/public';
import Layout from './layout';

export default Router.extend({
  renderPage(page, opts={layout: true}) {
    if (opts.layout) {
      page = (
        <Layout me={app.me}>
          {page}
        </Layout>
      )
    };
    React.render(page, document.body);
  },

  routes: {
    '': 'public',
    'repos': 'repos',
    'login': 'login',
    'logout': 'logout',
    'auth/callback?:query': 'authCallback'
  },

  // Route handlers
  public() {
    this.renderPage(<PublicPage/>, {layout: false} );

  },

  repos() {
    this.renderPage(<ReposPage/>);

  },
  login() {
    // Redirect for oauth github login
    window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
      // Github app settings matching created github app
      client_id: '8df2128b00fcc1dc1445',
      redirect_uri: window.location.origin + '/auth/callback',
      scope: 'user, repo'
    });

  },

  authCallback(query) {
    // Parse the query using qs module
    query = qs.parse(query);
    console.log(query);

    xhr({
      url: 'https://obscure-scrubland-3081.herokuapp.com/authenticate/' + query.code,
      json: true
    }, (err, req, body) => {
      app.me.token = body.token;
      // Redirect to repos page
      this.redirectTo('/repos');
    });
  },

  logout() {
    // Clear localstorage and redirect to homepage
    window.localStorage.clear();
    window.location = '/';
  }

});