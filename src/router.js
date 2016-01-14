import React from 'react';
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
    React.render(page, document.body)
  },

  routes: {
    '': 'public',
    'repos': 'repos'
  },

  // Route handlers
  public() {
    this.renderPage(<PublicPage/>, {layout: false} );

  },

  repos() {
    this.renderPage(<ReposPage/>);

  }
});