import React, { useContext } from "react";
import "./App.css";
import Login from './components/Login'
import Layout from "./components/Layout";
import {Routes,Route} from 'react-router-dom'
import AuthContext from "./context/AuthContext";

function App() {
    const {islogged} = useContext(AuthContext)
  return (
    <Routes>
      <Route path="/*" element={islogged ? <Layout /> : <Login /> } />
    </Routes>
    
  );
}

export default App;