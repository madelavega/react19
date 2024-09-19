import {User} from "types/User";

export const updateUser = async (user: User): Promise<User> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                ...user,
                status: 200
            });
        }, 2000);
    });
}
export const getUsers = async (): Promise<User[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {name: 'José'},
                {name: 'Luís'},
                {name: 'Alberto'}
            ]);
        }, 2000);
    });
}