import {User} from "types/User";

const UserItem = ({user} : {user: User}) => <li>{user.name}</li>

export default UserItem;