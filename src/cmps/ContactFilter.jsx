import React, { PureComponent } from 'react';

export default class ContactFilter extends PureComponent {
  state = {
    term: '',
  };

  constructor(props) {
    super(props);
    this.state = { ...props.filterBy };
  }

  onChangeHandler = (ev) => {
    const { value, name } = ev.target;
    this.setState({ [name]: value }, () => {
      this.props.onFilter({ ...this.state });
    });
  };

  render() {
    return (
      <form className="contact-filter">
        <input
          type="text"
          placeholder="Enter Contact Name..."
          onChange={this.onChangeHandler}
          name="term"
          value={this.state.term}
        />

      </form>
    );
  }
}
