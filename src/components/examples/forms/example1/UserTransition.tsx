import {useState, useTransition} from 'react';
import {updateUser} from "services/users";
import {User} from "types/User";

const  UserActionState = () => {
    const [user, setUser] = useState<User | null>();
    const [isPending, startTransition] = useTransition();

    const handleSubmit = () => {
        startTransition(async () => {
            if(!user) {
                setUser(prevUser => ({...prevUser}));
                return;
            }
            const updatedUser = await updateUser(user);
            if (updatedUser.status === 200) {
                setUser(updatedUser);
            } else {
                setUser(prevUser => ({...prevUser}));
            }
            return;
        });
    }

    return (
        <form>
            <input type="text" name="name" value={user?.name} onChange={({target: {value : name}}) => {
                setUser({name});
            }}/>
            <button type="submit" disabled={isPending} onClick={handleSubmit}>Actualizar</button>
            {user?.error && <p>{user.error}</p>}
        </form>
    );
}
export default UserActionState
