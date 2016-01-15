import React from 'react';

export default React.createClass({
  displayName: 'RepoDetail',

  render: function() {
    // ES6 functionality to pull out repos from this.props.repos
    const {repo} = this.props;

    return (
      <div className='container'>
        <h1>{repo.full_name}</h1>
        <p></p>
        <ul></ul>
      </div>
    );
  }
});
