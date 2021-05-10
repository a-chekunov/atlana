export const ROUTE = {
    users: '/user-list',
    profile: (username: string = '') => `/user/${username}`,
};