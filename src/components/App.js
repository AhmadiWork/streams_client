import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {
    return (
        <div>
            <Router history={history}>
                <div className='ui container'>
                    <Header/>

                    <Switch>
                        <Route path="/stream/create" component={StreamCreate}/>
                        <Route path="/stream/edit/:id" component={StreamEdit}/>
                        <Route path="/stream/:id" component={StreamShow}/>
                        <Route path="/" component={StreamList}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
};

export default App;