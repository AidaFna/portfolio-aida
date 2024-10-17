import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const ProjectCard = (props) => {
  return (
    <Col md={4} lg={4}>
      <Card className="h-100 shadow">
        <Card.Img variant="top" src={props?.img}></Card.Img>
        <Card.Body className="p-5 text-start">
          <Card.Title className="text-capitalized mb-4 fs-3">{props?.title ?? '-'}</Card.Title>
          <Card.Text>
            {props?.tags.map((tag) => (
              <Button
                key={tag}
                style={{ cursor: 'default' }}
                className="mx-1 mb-2"
                variant="secondary"
                size="sm"
                active
              >
                #{tag}
              </Button>
            ))}
          </Card.Text>
          <Card.Text>{props?.desc ?? '-'}</Card.Text>

          <a href={props?.link} className="text-decoration-none" target="_blank" rel="noreferrer">
            <Button className="shadow text-capitalized outline" variant="outline-primary">
              View Project
            </Button>
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectCard;
