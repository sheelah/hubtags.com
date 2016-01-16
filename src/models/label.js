import Model from 'ampersand-model';
import githubMixin from '../helpers/github-mixin';

export default Model.extend(githubMixin, {
  // Set ID so we can easily delete labels
  idAttribute: 'name',

  props: {
    name: 'string',
    color: 'string'
  },

  session: {
    editing: {
      type: 'boolean',
      default: false
    }
  }
});