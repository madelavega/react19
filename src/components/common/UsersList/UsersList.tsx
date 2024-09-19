import {use} from 'react';
import UserItem from "./UserItem";
import {User} from "types/User";

function UsersList({getter} : {getter: Promise<User[]>}) {
    const users = use(getter);
    return (
        <ul>
            {users.map((user, index) => <UserItem key={`user_${index}`} user={user}/>)}
        </ul>
    )
}
export default UsersList;