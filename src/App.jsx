import { Container, Row, Col, Tab } from "react-bootstrap";
import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navigation from "./navigation/navigation.jsx";
import Tabs from "./tabs/Tab.jsx";
import Display from "./display/Display.jsx";

import Car from "./car/Car.jsx";
import Form from "./formular/Form.jsx";

import Submitted from "./formular/Submitted.jsx";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                {" "}
                <Navigation />
                <Tabs />
                <Routes>
                    <Route path="/" element={<Display />} />
                    <Route path="/cars/:id" element={<Car />} />
                    <Route path="/rent/:id" element={<Form />} />
                    <Route path="/success" element={<Submitted />} />
                </Routes>
                <footer className="footer"> </footer>
            </div>{" "}
        </BrowserRouter>
    );
}

export default App;
