import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Router from "../router";
import {Auth0Lock} from "auth0-lock";

let isAdmin;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const token = process.env.REACT_APP_AUTH0_MANAGEMENT_TOKEN
const Profile = () => {
    const lock = new Auth0Lock(
        clientId,
        domain
    );

        lock.getUserInfo(token, function (error, profile) {
            if (!error) {
                isAdmin = profile.user_metadata.isadmin;
            }
            else
                isAdmin = false;
        });

    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div>
                {user.name + '\n'}
                {isAdmin}

                <Router />
            </div>
        )
    )
}

export default Profile
