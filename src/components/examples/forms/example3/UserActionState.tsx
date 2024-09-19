import { useActionState } from 'react';
import {updateUser,} from "services/users";
import Footer from "./Footer";
import {User} from "types/User";

const  UserActionState = () => {
    //https://github.com/facebook/react/pull/28491
    const [user, submitAction] = useActionState(
        async (previousUser: User | null, formData: FormData) => {
            console.log('previousUser: ', previousUser);

            const newName = formData.get("name") as string;
            if(!newName) return null;
            return await updateUser({name : newName});
        },
        null,
    );

    return (
        <form action={submitAction}>
            <input type="text" name="name" value={user?.name}/>
            <Footer/>
            {user?.error && <p>{user.error}</p>}
        </form>
    );
}
export default UserActionState
