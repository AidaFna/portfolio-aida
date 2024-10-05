import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import { projectItems } from '../helper/constants';

const Projects = () => {
  return (
    <div className="p-5" id="project">
      <Container className="my-5">
        <h2 className="fw-bold text-primary text-uppercase mb-5">My Projects</h2>
        <Row className="g-4 mt-5">
          {projectItems.map((projects) => (
            <ProjectCard
              key={projects?.id}
              img={projects?.img}
              title={projects?.title}
              tags={projects?.tags}
              desc={projects?.desc}
            ></ProjectCard>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
