import React from "react";
import "./App.css";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/home/Home";
import { ToastContainer } from 'react-toastify';

function App() {
  return <div className="App">

    <Layout>
      <Home />
    </Layout>
    <ToastContainer/>

  </div>;
}

export default App;
