import {MainModule} from 'modules/main';
import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import {store} from 'store/store';
import './App.scss';

export const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={MainModule}/>
        </BrowserRouter>
    </Provider>
)