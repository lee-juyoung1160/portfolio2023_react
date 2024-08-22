import React, { useEffect } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeView from "./views/HomeView";
import Detail from "./views/WorkDetails";

import smooth from "./utils/smooth";
import link from "./utils/link";
import cursor from "./utils/cursor";
import fade from "./utils/fade";


const App = () => {
    useEffect(() => {
        smooth();
        link();
        cursor();
        fade();
    }, []);

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/detail/:문자열" element={<Detail />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;