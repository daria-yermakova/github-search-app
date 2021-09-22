import {Route, Switch} from "react-router-dom";
import {History} from "../History/History";
import Search from "../Search/Search";
import React from "react";
import {Header} from "../Header/Header";

export function Main() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/history">
                    <History />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
            </Switch>
        </div>
    )
}