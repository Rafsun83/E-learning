import { CircularProgress } from '@mui/material';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import UseAuth from '../Context/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isloading } = UseAuth();
    if (isloading) { return <CircularProgress></CircularProgress> }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children :
                <Redirect
                    to={{
                        pathname: '/usersignup',
                        state: { from: location }
                    }}
                >

                </Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRoute;