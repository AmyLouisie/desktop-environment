import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, onClick }) => {
    return (
        <div className="project-card" onClick={onClick}>
            <img src={imageUrl} alt={title} className="project-card-image" />
            <h3 className="project-card-title">{title}</h3>
            <p className="project-card-description">{description}</p>
        </div>
    );
};

export default ProjectCard;