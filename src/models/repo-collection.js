import Collection from 'ampersand-rest-collection';
import Repo from './repo';
import githubMixin from '../helpers/github-mixin';

export default Collection.extend(githubMixin, {
  url: 'https://api.github.com/user/repos',

  // Turn repo object into a model and save in the collection
  model: Repo,

});