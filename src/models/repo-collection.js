import Collection from 'ampersand-rest-collection';
import Repo from './repo';
import githubMixin from '../helpers/github-mixin';

export default Collection.extend(githubMixin, {
  url: 'https://api.github.com/user/repos',

  // Turn repo object into a model and save in the collection
  model: Repo,

  // Convenience method to find repo by full name
  getByFullName(fullName) {
    let model = this.findWhere({full_name: fullName})

    if (!model) {
      // Create new repo if no one with that name is found
      model = new Repo({full_name: fullName});
    }

    return model;
  }

});