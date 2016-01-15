import React from 'react';
import qs from 'qs';
import Router from 'ampersand-router';
import styles from './styles/main.styl';
import ReposPage from './pages/repos';
import PublicPage from './pages/public';
import Layout from './layout';

export default Router.extend({
  renderPage(page, opts={layout: true}) {
    if (opts.layout) {
      page = (
        <Layout>
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
  }

});