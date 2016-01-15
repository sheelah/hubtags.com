import Model from 'ampersand-model';
import githubMixin from '../helpers/github-mixin';

export default Model.extend(githubMixin, {
  url() {
    return 'https://api.github.com/repos/' + this.full_name;
  },

  props: {
    id: 'number',
    name: 'string',
    full_name: 'string'
  },

  // Derived property for the model
  derived: {
    appUrl: {
      deps: ['full_name'],
      fn() {
        return '/repo/' + this.full_name;
      }
    }
  }
})