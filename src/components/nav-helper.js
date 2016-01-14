import React from 'react';
import app from 'ampersand-app';
import localLinks from 'local-links';

export default React.createClass({
  displayName: 'NavHelper',

  onClick(event) {
    // Check for a local link by checking for a pathname
    const pathname = localLinks.getLocalPathname(event);

    if (pathname) {
      event.preventDefault();
      // Handle routing internally instead of triggering page refresh
      app.router.history.navigate(pathname);

    }
  },
  render: function() {
    // Add click handler wrapped around child content to run link check
    return (
      <div {...this.props} onClick={this.onClick}>
        {this.props.children}
      </div>
    )
  }
});
