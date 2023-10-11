import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Calendars from "./Pages/Calendar";
import Note from "./Pages/Notes";
import TurnOff from "./Pages/TurnOff";
import NoPage from "./Pages/NoPage";
import Height from "./Pages/Height";
import ToDoList from "./Pages/ToDoList";
import Reminder from "./Pages/Reminder";
import Devices from "./Pages/Devices";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/off" element={<TurnOff />} />
          <Route path="/notes" element={<Note />} />
          <Route path="/calendar" element={<Calendars />} />
          <Route path="/height" element={<Height />} />
          <Route path="/todo" element={<ToDoList />} />
          <Route path="/reminder" element={<Reminder />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
