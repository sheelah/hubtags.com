import React from 'react';

export default React.createClass({
  displayName: 'MessageContent',

  render: function() {
    const {title, body} = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    )
  }
});