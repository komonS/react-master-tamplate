import React,{useContext} from 'react';
import Header from './component/layout/Header'
import Home from './component/content/Home'
import Login from './component/content/Login'
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/" >
            <Home />
          </Route>
        </Switch>
      </div>

    </div>
  )
}


export default App;
