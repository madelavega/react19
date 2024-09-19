import {Suspense} from 'react';
import UsersList from "components/common/UsersList";
import {getUsers} from "services/users";

function UsersManager() {
    return (
        <Suspense fallback={<div>Cargando usuarios...</div>}>
            <UsersList getter={getUsers()} />
        </Suspense>
    )
}
export default UsersManager;