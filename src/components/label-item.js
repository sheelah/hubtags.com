import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: 'LabelListItem',

  getInitialState() {
    // Get starting state for this component
    // Create another object that holds initial state of component
    const {name, color} = this.props.label;
    return {name, color};
  },

  onEditClick(event) {
    event.preventDefault();
    this.props.label.editing = true;
  },

  onCancelClick(event) {
    event.preventDefault();
    const {label} = this.props;

    if (label.saved) {
      label.editing = false;
      // Revert to initial state
      this.setState(this.getInitialState());
    } else {
      // If label isn't saved yet, don't do a delete request and
      // instead destroy the new model object in memory
      label.destroy();
    }
  },

  onDeleteClick(event) {
    event.preventDefault();
    // Set wait:true on destroy to keep in UI until actual deletion
    // from the collection
    this.props.label.destroy();
  },

  onNameChange(event) {
    event.preventDefault();
    this.setState({
      name: event.target.value
    });
  },

  onColorChange(event) {
    event.preventDefault();
    this.setState({
      // Slice off "#" so that it can't be edited
      color: event.target.value.slice(1)
    });
  },

  onSubmit(event) {
    event.preventDefault();
    const {label} = this.props;
    if (label.saved) {
      // it's an existing label that's being updated
      label.update(this.state);
    } else {
      // it's a new label that hasn't been saved yet
      label.save(this.state, {
        success: () => {
          label.saved = true;
        }
      });
    }
    label.editing = false;
  },

  render() {
    const {label} = this.props;
    const {color} = this.state;
    const cssColor = '#' + color;
    let content;

    // Editing
    if (label.editing) {
      content = (
        <form onSubmit={this.onSubmit} className='label'>
          <span style={{backgroundColor: cssColor}} className='label-color avatar avatar-small avatar-rounded'>&nbsp;</span>
          <input name='name' onChange={this.onNameChange} value={this.state.name} />
          <input name='color' onChange={this.onColorChange} value={cssColor} />
          <button type='submit' className='button button-small'>Save</button>
          <button onClick={this.onCancelClick} type='button' className='button button-small button-unstyled'>cancel</button>
        </form>
      );
    } else {
    // Viewing
      content = (
        <div className='label'>
          <span className='label-color' style={{backgroundColor: cssColor}}>&nbsp;</span>
          <span>{label.name}</span>
          <span onClick={this.onEditClick} className='octicon octicon-pencil'></span>
          <span onClick={this.onDeleteClick} className='octicon octicon-x'></span>
        </div>
      );
    }

    return (
      <div>
        {content}
      </div>
    );
  }
});