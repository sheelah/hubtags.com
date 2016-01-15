import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';
import NavHelper from './components/nav-helper';

export default React.createClass({
  // Register a handler that triggers an update if model has a change
  mixins: [ampersandMixin],

  displayName: 'Layout',

  render() {
    // ES6 feature:
    // Extract me from props and create local property called me
    const {me} = this.props;
    return (
      <NavHelper>
        <nav className='top-nav top-nav-light cf' role='navigation'>
          <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
          <label htmlFor='menu-toggle'>Menu</label>
          <ul className='list-unstyled list-inline cf'>
            <li>Labelr</li>
            <li><a href='/repos'>Repos</a></li>
            <li className='pull-right'><a href='/logout'>Logout</a> {me.login}</li>
          </ul>
        </nav>
        <div className='container'>
          {this.props.children}
        </div>
      </NavHelper>
    )
  }
});