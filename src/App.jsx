import React from "react";
// import { render } from 'react-dom';
import { Route, Routes, Outlet } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MessageContainer from './Containers/MessageContainer.jsx'

const App = () => {

  //button to run it

  //render list from XXX component

  return (
    <Router>
    <div className="router">     
      <main>
          <Switch>
            <Route exact path="/message_container">
              <MessageContainer />
            </Route>
          </Switch>
      </main> 
    </div>
    </Router>
  );
 };

export default App;
