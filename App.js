// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={ShowList} />
                <Route path="/show/:id" component={ShowDetails} />
            </Switch>
        </Router>
    );
}

export default App;
