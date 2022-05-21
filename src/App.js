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

function App() {
  return (
    <div className="app">
      <Router>
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
    </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
