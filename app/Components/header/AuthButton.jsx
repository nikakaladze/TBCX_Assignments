
'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import LogOut from './LogOut';
import Login from './Login';


const AuthButton = () => {
    const { user } = useUser();

    return user ? (
        <a href="/api/auth/logout">
            <LogOut />
        </a>
    ) : (
            <a href="/api/auth/login" >
           <Login />
        </a>
    );
};

export default AuthButton;
