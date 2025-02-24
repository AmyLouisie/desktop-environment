import React from 'react';
import Navbar from './Navbar';
import ProjectCard from './ProjectCard';

const projects = [
    { id: 1, title: 'Project One', description: 'Description for project one' },
    { id: 2, title: 'Project Two', description: 'Description for project two' },
    { id: 3, title: 'Project Three', description: 'Description for project three' },
];

const Desktop: React.FC = () => {
    return (
        <div className="desktop">
            <Navbar />
            <div className="project-cards">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Desktop;