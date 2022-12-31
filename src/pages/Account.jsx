import React from 'react';
import { UserAuth } from '../context/AuthContext';

const Account = () => {

    const { logOut, user } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='account mt-5'>
            <h2>This is the user's account page.</h2>
            <h5 className='mt-5'>Welcome, {user?.displayName}</h5>
            {/* <button onClick={handleSignOut}>LogOut</button> */}
        </div>
    )
}

export default Account