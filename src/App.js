import React, { createContext, useState } from "react";
import NavBar from "./components/navbar";
import DashBoard from "./components/dashboard";
import Clients from "./components/clients";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Transaction from "./components/transaction";
import Agent from "./components/agent";
import AgentForm from "./components/agentForm";

export const Context= createContext();

function App() {
  const [openSideBar, setOpenSideBar] = useState(true);
  const handleSideBar= ()=>{
    setOpenSideBar(!openSideBar);
  }
  return (
    <div className="App">
      <Context.Provider value={{ openSideBar, handleSideBar }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/transaction" element={<Transaction />} />
          {/* private */}
          <Route path="/agent" element={<Agent />} />
          <Route path="/agentForm" element={<AgentForm />} />
        </Routes>
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
