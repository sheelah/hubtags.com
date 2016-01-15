import Model from 'ampersand-model';
import githubMixin from '../helpers/github-mixin';
import RepoCollection from './repo-collection';

export default Model.extend(githubMixin, {
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

  collections: {
    // Create repo collection when me model is created
    repos: RepoCollection
  },

  onTokenChange() {
    window.localStorage.token = this.token;
    this.fetchInitialData();
  },

  fetchInitialData() {
    // If user is logged in
    if (this.token) {
      // Call ampersand model's fetch method
      this.fetch();
      this.repos.fetch();
    }
  }
});