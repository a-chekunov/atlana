export const ENDPOINT = {
    getUserList: 'users',
    getFilteredUserList: (searchQuery: string) => `search/users?q=${searchQuery}`,
    getUserDetails: (username: string) => `users/${username}`,
    getUserRepos: (username: string) => `users/${username}/repos`,
    // getFilteredUserRepos: (username: string, searchQuery: string) => `users/${username}/repos/q=${searchQuery}`,
}