import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Header from './components/Header';
import SideBar from './SideBar';
import styled from "styled-components";
import Chat from './Chat';
import { useAuthState } from "react-firebase-hooks/auth";
import Login from './Login';
import { auth } from "./firebase";

function App() {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ): (
          <div> 
            <Header />
            <AppBody>
              <SideBar />
              <Chat />
              <Routes>
                <Route path="/" element={<Header />}>
                  
                </Route>        
              </Routes>
            </AppBody>
          </div>
        )}
    </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
