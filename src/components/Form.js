import React from 'react';

const Form = () => (
  <div>
    <form>
      <input type="text" name="title" id="title" placeholder="Add Book Title" />
      <input type="text" name="author" id="author" placeholder="Add Book Author" />
      <button type="button">Add Book</button>
    </form>
  </div>
);

export default Form;
