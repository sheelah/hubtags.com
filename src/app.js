import React from 'react';
import styles from './sass/main.scss';

const Hello = React.createClass({
  render() {
    return <div><h1>Hello, {this.props.name}!</h1></div>
  }
});

React.render(<Hello name="sheelah" />, document.body);
