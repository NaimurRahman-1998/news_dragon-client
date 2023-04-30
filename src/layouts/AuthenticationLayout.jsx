/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';

const AuthenticationLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthenticationLayout;