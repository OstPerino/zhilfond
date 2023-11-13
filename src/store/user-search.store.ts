import {IUser} from "@/types/user.type";
import {validateSearchString} from "@/helpers/validateSearchString";
import {fetchCurrentUser, fetchUsersById, fetchUsersByName} from "@/services/user.services";
import {splitString} from "@/helpers/parseSearchString";
import {removeDuplicates} from "@/helpers/removeDuplicates";
import {Nullable} from "@/types/types";

interface ISearchState {
    currentUser: IUser;
    usersList: Array<IUser>
}

export default {
    namespaced: true,
    state: {
        usersList: [],
        currentUser: null as Nullable<IUser>
    },
    mutations: {
        setUsersList(state: ISearchState, users: IUser[]) {
            state.usersList = users;
        },
        setCurrentUser(state: ISearchState, user: IUser) {
            state.currentUser = user;
        }
    },
    actions: {
        async fetchUsers(context: any, searchString: string) {
            try {
                const [IDs, names] = splitString(validateSearchString(searchString));
                const fetchedById = await fetchUsersById(IDs);
                const fetchedByNames = await fetchUsersByName(names);
                const result = [...fetchedById?.data, ...fetchedByNames?.data];
                context.commit("setUsersList", removeDuplicates(result));
            } catch (e: any) {
                return e.response;
            }
        },
        async fetchCurrentUser(context: any, userId: number) {
            try {
                const response = await fetchCurrentUser(userId);
                context.commit("setCurrentUser", response.data);
            } catch (e: any) {
                return e.response;
            }
        }
    }
}