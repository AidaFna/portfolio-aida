import React from 'react';
import { Container } from 'react-bootstrap';
import LinkedIn from '../assets/icons/linkedin.svg';
import Github from '../assets/icons/github.svg';

const Contact = () => {
  return (
    <div className="bg-dark text-light py-5" id="contact">
      <Container className="my-5">
        <h2 className="mb-5 text-white text-uppercase fw-bold">Contact Me</h2>
        <p>aidafitrinuramrina@gmail.com</p>
        <p>+(62) 857 - 3211 - 4878</p>
        <p>Kediri, Indonesia 64294</p>
        <hr className="w-50 mx-auto"></hr>
        <ul className="list-unstyled center-position">
          <li className="me-3">
            <a href="https://www.linkedin.com/in/aidafna">
              <img src={LinkedIn} height={32} />
            </a>
          </li>
          <li>
            <a href="https://github.com/AidaFna">
              <img src={Github} height={32} />
            </a>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Contact;
