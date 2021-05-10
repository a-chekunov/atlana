import {IUserListOriginal, IUserListReformated} from "models/user-list.models";
import {IUserProfileOriginal} from "models/user-profile.models";

interface IUserReposCount {
    id: number,
    repos_count: number
}

export const reformatUserList = (profiles: IUserProfileOriginal[], users: IUserListOriginal[]) => {
    const newArr: IUserListReformated[] = []

    const newData: IUserReposCount[] = profiles.map(user => {
        return {
            id: user.id,
            repos_count: user.public_repos
        }
    })

    users.forEach(user => {
        newData.forEach(item => {
            if (user.id === item.id) {
                newArr.push({
                    ...user,
                    repos_count: item.repos_count
                })
            }
        })
    })

    return newArr
}