import {IUserProfileOriginal, IUserRepoOriginal} from "models/user-profile.models";

export const reformatUserProfile = (profile: IUserProfileOriginal, repos: IUserRepoOriginal[]) => {
    return {
        profile: {
            id: profile.id,
            avatar_url: profile.avatar_url,
            login: profile.login,
            name: profile.name,
            email: profile.email,
            location: profile.location,
            created_at: profile.created_at,
            followers: profile.followers,
            following: profile.following,
            bio: profile.bio
        },
        repos: repos.map(repo => {
            return {
                id: repo.id,
                name: repo.name,
                forks: repo.forks_count,
                stars: repo.stargazers_count,
                url: repo.clone_url
            }
        })
    }
}