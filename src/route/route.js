import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router'
import history from '../utils/history'
import { Provider } from 'mobx-react';

import store from '../stores/index';

import IndexPage from '../pages/index/index'

class Routes extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <div>
                <Provider {...store}>
                    <Router history={history}>
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
