import React from 'react';

interface ProjectDetailsProps {
    project: {
        title: string;
        description: string;
        technologies: string[];
        link: string;
    };
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
    return (
        <div className="project-details">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <h2>Technologies Used:</h2>
            <ul>
                {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
};

export default ProjectDetails;