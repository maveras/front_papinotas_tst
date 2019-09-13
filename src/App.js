import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Nav } from './components/nav'
import { ListUsersContainer } from './containers/ListUsersContainer/'
import { CreateUsersContainer } from './containers/CreateUsersContainer/'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route exact path='/' component={ListUsersContainer} />
          <Route exact path='/createUser' component={CreateUsersContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
