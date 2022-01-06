import './App.css';
import {Switch, Route} from 'react-router-dom';
import NavBar from './NavBar';
import AccountPage from './AccountPage';
import Header from './Header';
import Search from './Search';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LoggedInApp from "./LoggedInApp";
import LoggedOutApp from "./LoggedOutApp";
import HomePage from "./HomePage";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  console.log(currentUser);
  useEffect(() => {
    fetch("http://localhost:4000/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setAuthenticated(true);
        });
      } else {
        setAuthenticated(true);
      }
    });
  }, []);


  // if (!authenticated) {
  //   return <div></div>;
  // }

  return (
    <div className="App">
      
      
      <Header />
      <NavBar />
      <Switch>
      <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/account">
          <AccountPage />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/user/:id">
          <AccountPage />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
