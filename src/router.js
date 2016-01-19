import React from 'react';
import app from 'ampersand-app';
import qs from 'qs';
import xhr from 'xhr';
import Router from 'ampersand-router';
import ReposPage from './pages/repos';
import PublicPage from './pages/public';
import RepoDetailPage from './pages/repo-detail';
import MessagePage from './pages/message';
import Layout from './layout';
import config from './config';

function requiresAuth(handlerName) {
  // This runs at the time you require it, so returns a function
  // to run later
  return function() {
    // JS closure
    // 'this' is a reference to the handler itself
    if (app.me.token) {
      // User is logged in
      // Call the handler and send along any params received
      this[handlerName].apply(this, arguments)
    } else {
      this.redirectTo('/');
    }
  }
}

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
    'repos': requiresAuth('repos'),
    'login': 'login',
    'logout': 'logout',
    'auth/callback?:query': 'authCallback',
    'repo/:owner/:name': requiresAuth('repoDetail'),
    '*forOhfour': 'fourOhFour'
  },

  // Route handlers
  public() {
    this.renderPage(<PublicPage/>, {layout: false} );
  },

  repos() {
    this.renderPage(<ReposPage repos={app.me.repos} />);
  },

  repoDetail(owner, name) {
    const model = app.me.repos.getByFullName(owner + '/' + name);
    this.renderPage(<RepoDetailPage repo={model} labels={model.labels} />);
  },

  login() {
    // Redirect for oauth github login
    window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
      // Github app settings matching created github app
      client_id: config.clientId,
      redirect_uri: window.location.origin + '/auth/callback',
      scope: 'user, repo'
    });

  },

  authCallback(query) {
    // Parse the query using qs module
    query = qs.parse(query);

    xhr({
      url: config.authUrl + '/' + query.code,
      json: true
    }, (err, req, body) => {
      app.me.token = body.token;
      // Redirect to repos page
      this.redirectTo('/repos');
    });

    this.renderPage(<MessagePage title='Fetching your data' body='Stand by...' />);
  },

  logout() {
    // Clear localstorage and redirect to homepage
    window.localStorage.clear();
    window.location = '/';
  },

  fourOhFour() {
    this.renderPage(<MessagePage title='Not Found' body='Sorry - nothing here' />)
  }


});