import React from "react";
import {RepoCard} from "../repo-card/repo-card";
import './repo-list.scss'
import {IUserRepoReformated} from "models/user-profile.models";

interface IProps {
    repos: IUserRepoReformated[];
    goToGithubRepoUrl: (url: string) => void;
}

export const RepoList: React.FC<IProps> = ({repos, goToGithubRepoUrl}) => {
    return (
        <div className='repo-list'>
            {repos.map(repo =>
                <RepoCard
                    key={repo.id}
                    name={repo.name}
                    forks={repo.forks}
                    stars={repo.stars}
                    goToGithubRepoUrl={() => goToGithubRepoUrl(repo.url)}
                />
            )
            }
        </div>
    )
}