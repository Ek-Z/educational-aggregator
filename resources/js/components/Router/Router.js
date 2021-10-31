import React from 'react';
import { HashRouter, Route, Switch, useParams } from 'react-router-dom';
import { Header } from '../../layouts/Header/Header';
import { Catalog } from '../../layouts/Catalog/Catalog';
import { AdminPanel } from '../../layouts/AdminPanel/AdminPanel';
import {LoginPage} from "../../layouts/LoginPage/LoginPage";
import {RegistrationPage} from "../../layouts/RegistrationPage/RegistrationPage";
import { CourseCard } from '../CourseCard/CourseCard';

export const Router = () => {
    return (
        <HashRouter>
            <Header/>
            <Switch>
                <Route exact={true} path="/">
                </Route>
                <Route exact={true} path="/courses">
                    <Catalog/>
                </Route>
                <Route exact={true} path="/courses/:courseId?">
                    <CourseCard/>
                </Route>
                <Route exact={true} path="/admin">
                    <AdminPanel/>
                </Route>
                <Route exact={true} path="/signIn">
                    <LoginPage/>
                </Route>
                <Route exact={true} path="/signUp">
                    <RegistrationPage/>
                </Route>
            </Switch>
        </HashRouter>
    );
};
