import React from "react";
import Dashboard from "./Dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UserProvider } from "./UserContext";
import Users from "./Users";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <UserProvider>
            <Route path="/" component={Dashboard} exact={true}></Route>
            <Route path="/users" component={Users} exact={true}></Route>
            <Route path="/create-user" component={CreateUser} exact={true}></Route>
            <Route path="/edit-user/:id" component={EditUser} exact={true}></Route>
          </UserProvider>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
