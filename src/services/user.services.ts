import $api from "@/services/index";

export async function fetchCurrentUser(userID: number) {
    return $api.get(`/users/${userID}`);
}

export async function fetchUsersByName(names: string[]) {
    if (!names.length) {
        return Promise.resolve({ data: [] });
    }

    const path = names.reduce((acc: string, current: string) => {
        return `${acc}username=${current}&`;
    }, "/users/?").slice(0, -1);

    return $api.get(path);
}

export async function fetchUsersById(IDs: number[]) {
    if (!IDs.length) {
        return Promise.resolve({ data: [] });
    }

    const path = IDs.reduce((acc: string, current: number) => {
        return `${acc}id=${current}&`;
    }, "/users/?").slice(0, -1);

    return $api.get(path);
}