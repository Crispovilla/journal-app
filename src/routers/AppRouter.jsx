import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch, 
} from "react-router-dom";

import { firebase } from '../firebase/firebase-config';

import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { login } from "../actions/auth";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import './spinner.css'
import { startLoadingNotes } from "../actions/notes";

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState( true )
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged( async (user) => {

      if (user?.uid) {
        dispatch( login( user.uid, user.displayName ) );
        setIsLoggedIn(true)      
        
        dispatch( startLoadingNotes( user.uid ) )
      } else {
        setIsLoggedIn(false)
      }
      setChecking(false)

    });
  }, [ dispatch, setChecking, setIsLoggedIn ])

  if(checking){
    return(
      <div className="spinner"></div>
     
    ) 
  }


  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute isAuthenticated={isLoggedIn} path="/auth" component={ AuthRouter } />
          <PrivateRoute isAuthenticated={isLoggedIn} exact path="/" component={ JournalScreen } />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
