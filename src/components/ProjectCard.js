import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const ProjectCard = (props) => {
  return (
    <Col md={6} lg={6}>
      <Card className="h-100 shadow">
        <Card.Img variant="top" src={props?.img}></Card.Img>
        <Card.Body className="p-5">
          <Card.Title className="text-uppercase mb-4 fs-2">{props?.title ?? '-'}</Card.Title>
          <Card.Text>
            {props?.tags.map((tag) => (
              <Button key={tag} className="mx-1" variant="secondary" size="sm" active>
                #{tag}
              </Button>
            ))}
          </Card.Text>
          <Card.Text>{props?.desc ?? '-'}</Card.Text>

          <Button className="shadow text-uppercase outline" variant="outline-primary">
            View Project
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectCard;
