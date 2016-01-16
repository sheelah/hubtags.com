import Collection from 'ampersand-rest-collection';
import Label from './label';
import githubMixin from '../helpers/github-mixin';

export default Collection.extend(githubMixin, {
  url() {
    return this.parent.url() + '/labels';
  },

  // Turn label object into a model and save in the collection
  model: Label
});