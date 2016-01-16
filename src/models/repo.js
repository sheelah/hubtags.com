import Model from 'ampersand-model';
import githubMixin from '../helpers/github-mixin';
import LabelCollection from './label-collection';

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
  },

  // Set up labels as a child of repos
  collections: {
    labels: LabelCollection
  },

  fetch() {
    // Run Model's fetch but use in this context with any arguments
    Model.prototype.fetch.apply(this, arguments);
    this.labels.fetch();
  }
});