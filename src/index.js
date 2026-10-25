import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";

import Home from "./pages/Home/Home";
import Scores from "./pages/Scores/Scores";
import Teams from "./pages/Teams/Teams";
import Players from "./pages/Players/Players";
import Schedule from "./pages/Schedule/Schedule";
import News from "./pages/News/News";
import NewsDetail from "./pages/NewsDetail/NewsDetail";
import Contact from "./pages/Contact/Contact";

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="scores" element={<Scores />} />
                    <Route path="teams" element={<Teams />} />
                    <Route path="players" element={<Players />} />
                    <Route path="schedule" element={<Schedule />} />
                    <Route path="news" element={<News />} />
                    <Route path="news-detail" element={<NewsDetail />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </HashRouter>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);