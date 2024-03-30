import React from "react";
import "./App.css";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/home/Home";

function App() {
  return <div className="App">

    <Layout>
      <Home />
    </Layout>

  </div>;
}

export default App;
