import { useActionState } from 'react';
import {updateUser,} from "services/users";
import {User} from "types/User";

const  UserActionState = () => {
    //https://github.com/facebook/react/pull/28491
    const [user, submitAction, isPending] = useActionState(
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
            <button type="submit" disabled={isPending}>Actualizar</button>
            {user?.error && <p>{user.error}</p>}
        </form>
    );
}
export default UserActionState
