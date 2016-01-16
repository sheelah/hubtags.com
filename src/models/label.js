import Model from 'ampersand-model';
import githubMixin from '../helpers/github-mixin';

export default Model.extend(githubMixin, {
  props: {
    name: 'string',
    color: 'string'
  },
});