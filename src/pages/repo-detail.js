import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';
import LabelItem from '../components/label-item';

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: 'RepoDetail',

  render: function() {
    // ES6 functionality to pull out repos and repos from this.props
    const {repo, labels} = this.props;

    return (
      <div className='container'>
        <h1>{repo.full_name}</h1>
        <p></p>
        <ul>
          {labels.map((label) => {
            return <LabelItem key={label.name} label={label} />
          })}
        </ul>
      </div>
    );
  }
});
