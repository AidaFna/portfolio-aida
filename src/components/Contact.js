import React from 'react';
import { Container } from 'react-bootstrap';
import LinkedIn from '../assets/icons/linkedin.svg';
import Github from '../assets/icons/github.svg';

const Contact = () => {
  return (
    <div className="bg-dark text-light py-5" id="contact">
      <Container className="my-5">
        <h2 className="mb-5 text-light text-uppercase fw-bold">Contact Me</h2>
        <p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=aidafitrinuramrina@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="text-decoration text-light"
          >
            aidafitrinuramrina@gmail.com
          </a>
        </p>
        <p>
          <a href="https://wa.me/6285732114878" target="_blank" rel="noreferrer" className="text-decoration text-light">
            +(62) 857 - 3211 - 4878
          </a>
        </p>
        <p>Kediri, Indonesia 64294</p>
        <hr className="w-50 mx-auto"></hr>
        <ul className="list-unstyled center-position">
          <li className="me-3">
            <a href="https://www.linkedin.com/in/aidafna" target="_blank" rel="noreferrer">
              <img src={LinkedIn} height={32} />
            </a>
          </li>
          <li>
            <a href="https://github.com/AidaFna" target="_blank" rel="noreferrer">
              <img src={Github} height={32} />
            </a>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Contact;
