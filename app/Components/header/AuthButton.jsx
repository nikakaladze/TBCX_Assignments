
'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import LogOut from './LogOut';
import Login from './Login';


const AuthButton = () => {
    const { user } = useUser();

    return user ? (
        
            <LogOut />
        
    ) : (
            
           <Login />
        
    );
};

export default AuthButton;
