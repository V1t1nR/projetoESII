import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import EventForm from "./EventForm";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<EventForm />} />
            </Routes>
        </Router>
    );
}

export default App; // Agora estamos exportando corretamente
