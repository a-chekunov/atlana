import {ROUTE} from "constants/routes";
import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Users} from "./users";
import {UserProfile} from "./user-profile";

export const MainModule: React.FC = () => {
    return (
        <div>
            <Switch>
                <Route exact path={ROUTE.users} component={Users}/>
                <Route path={ROUTE.profile()} component={UserProfile}/>
                <Redirect from={'/'} to={ROUTE.users}/>
            </Switch>
        </div>
    )
};