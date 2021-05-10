import {RestService} from "helpers/rest-service";
import {ENDPOINT} from "env/endpoints";
import {IFilteredUserListOriginal, IUserListOriginal} from "models/user-list.models";

export class UserListApi {
    public static async UserList(): Promise<IUserListOriginal[]> {
        return await RestService.get<IUserListOriginal[]>({url: ENDPOINT.getUserList});
    }

    public static async FilteredUserList(searchQuery: string): Promise<IFilteredUserListOriginal> {
        return await RestService.get<IFilteredUserListOriginal>({url: ENDPOINT.getFilteredUserList(searchQuery)});
    }
}