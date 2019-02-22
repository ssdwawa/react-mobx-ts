import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router'
import history from '../utils/history'
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import store from '../stores/index';

import IndexPage from '../pages/index/index'

const routerStore = new RouterStore();
const bindhistory = syncHistoryWithStore(history, routerStore);
store.router = routerStore
class Routes extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <div>
                <Provider {...store}>
                    <Router history={bindhistory}>
                        <div>
                            <Route path="/" component={IndexPage} />
                        </div>
                    </Router>
                </Provider>,
            </div>
        )
    }
}

export default Routes