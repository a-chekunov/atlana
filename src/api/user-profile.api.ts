import {RestService} from "helpers/rest-service";
import {ENDPOINT} from "env/endpoints";
import {IUserProfileOriginal, IUserRepoOriginal} from "models/user-profile.models";

export class UserProfileApi {
    public static async UserDetails(username: string): Promise<IUserProfileOriginal> {
        return await RestService.get<IUserProfileOriginal>({url: ENDPOINT.getUserDetails(username)});
    }

    public static async UserRepos(username: string): Promise<IUserRepoOriginal[]> {
        return await RestService.get<IUserRepoOriginal[]>({url: ENDPOINT.getUserRepos(username)});
    }

    // public static async FilteredUserRepos(username: string, searchQuery: string): Promise<IUserRepoOriginal[]> {
    //     return await RestService.get<IUserRepoOriginal[]>({url: ENDPOINT.getFilteredUserRepos(username, searchQuery)});
    // }
}