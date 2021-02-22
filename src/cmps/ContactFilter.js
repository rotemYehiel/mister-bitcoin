import React, { useState } from 'react';

const ContactFilter = (props) => {
  const [term, setTerm] = useState('');

  const onChangeHandler = (ev) => {
    setTerm(ev.target.value);
    props.onFilter(term);
  };

  return (
    <form className="contact-filter">
      <input
        type="text"
        placeholder="Search contact by name..."
        onChange={(ev) => onChangeHandler(ev)}
        name="term"
        value={term}
      />

    </form>
  );

}
export default ContactFilter;