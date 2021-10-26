import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@mui/material/styles';
import { Catalog } from './layouts/Catalog/Catalog';
import { store } from './store';
import { theme } from '../theme/theme';
import { persistor } from './store';
import { Header } from './layouts/Header/Header';
import { AdminPanel } from './layouts/AdminPanel/AdminPanel';
import '../css/app.css';
import {LoginForm} from "./layouts/LoginForm/LoginForm";

function App () {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <HashRouter>
                        <Header/>
                        <Switch>
                            <Route exact={true} path="/">
                                <Catalog/>
                            </Route>
                            <Route egit xact={true} path="/admin">
                                <AdminPanel/>
                            </Route>
                            <Route exact={true} path="/signIn">
                                <LoginForm/>
                            </Route>
                            <Route exact={true} path="/signUp">
                                <LoginForm onSubmit="addUser"/>
                            </Route>
                        </Switch>
                    </HashRouter>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}
