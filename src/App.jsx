import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import HomePage from './components/HomePage/index';
import UserPage from './components/UserPage/index';
import './App.css';


class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route path='/user/:id/:album?/:pageNumber?' component={UserPage} />
                        <Route path='/' component={HomePage} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;