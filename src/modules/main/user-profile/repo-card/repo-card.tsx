import React from "react";
import './repo-card.scss'

interface IProps {
    name: string;
    forks: number;
    stars: number;
    goToGithubRepoUrl: () => void;
}

export const RepoCard: React.FC<IProps> = ({name, forks, stars, goToGithubRepoUrl}) => {
    return (
        <div className='repo-card' onClick={goToGithubRepoUrl}>
            <h3 className='repo-card-name'>{name}</h3>
            <div className='repo-card-tags'>
                <p className='repo-card-tag'>Forks: {forks}</p>
                <p className='repo-card-tag'>Stars: {stars}</p>
            </div>
        </div>
    )
}