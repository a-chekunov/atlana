export interface IUserListOriginal {
    id: number,
    login: string,
    node_id: string,
    gravatar_id: string,
    url: string,
    type: string,
    avatar_url: string,
    events_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    html_url: string,
    organizations_url: string,
    received_events_url: string,
    repos_url: string,
    site_admin: boolean,
    starred_url: string,
    subscriptions_url: string,
}

export interface IUserListReformated {
    id: number,
    login: string,
    repos_count: number,
    avatar_url: string,
}

export interface IFilteredUserListOriginal {
    incomplete_results: boolean,
    items: IUserListOriginal[],
    total_count: number,
}