import React from 'react';
//import { Link } from 'react-router-dom';

function ProjectBoard() {
  return (
    <h3>Sample for the project board</h3>
  );
}

export default ProjectBoard;



/*
  const project = props.project;
  return (
    <li key={project.title}>
      <div className="project__board">
        <h3>{project.title}</h3>
        <h2>Status: {project.status}</h2>
        <Link to={project.slug}>Find out more of this project</Link>    
        <p>Description: {project.description}</p> 
        <p>Location: {project.location.street}, {project.location.city}, {project.location.postalCode}</p>
        <p>{project.location.region}{project.location.country}</p>
      </div>
    </li>
  );
*/