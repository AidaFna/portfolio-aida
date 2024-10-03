import React from 'react';
import { Container } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className="bg-dark text-light py-5" id="contact">
      <Container className="my-5">
        <h2 className="mb-5 text-white text-uppercase fw-bold">Contact Me</h2>
        <p>aidafitrinuramrina@gmail.com</p>
        <p>+(62) 857 - 3211 -4878</p>
        <p>Kediri, Indonesia 64294</p>
        <hr className="w-50 mx-auto"></hr>
        <ul className="list-unstyled center-position">
          <li></li>
          <li></li>
        </ul>
      </Container>
    </div>
  );
};

export default Contact;
