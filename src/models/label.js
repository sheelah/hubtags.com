import Model from 'ampersand-model';
import githubMixin from '../helpers/github-mixin';
import xhr from 'xhr';

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
    },
    saved: {
      type: 'boolean',
      default: true
    }
  },

  isNew() {
    // Determine whether a label is new (has been saved already)
    return !this.saved;
  },

  update(attributes) {
    // Custom request to deal with github API intricacies
    const oldAttributes = this.getAttributes({props: true, session: false});
    xhr({
      // url method is part of the label collection model
      url: this.url(),
      json: attributes,
      method: 'PATCH',
      headers: {
        Authorization: 'token ' + app.me.token
      }
    }, (err, req, body) => {
      if (err) {
        this.set(oldAttributes);
        console.log('something went wrong');
      }
    });
    this.set(attributes);
  }
});