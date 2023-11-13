import {IUser} from "@/types/user.type";

export function removeDuplicates(users: IUser[]): IUser[] {
    const uniqueUsers = users.filter((user, index, self) =>
        index === self.findIndex((u) => u.id === user.id)
    );
    return uniqueUsers;
}