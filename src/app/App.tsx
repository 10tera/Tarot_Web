import React,{ HashRouter,Routes,Route } from "react-router-dom";
import {One,Two,Third,Five,Six,Ten,TopPage} from "./components/pages";

export const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route index path={"/"} element={<TopPage/>}/>
                <Route path={"/one"} element={<One/>}/>
                <Route path={"/two"} element={<Two/>}/>
                <Route path={"/third"} element={<Third/>}/>
                <Route path={"/five"} element={<Five/>}/>
                <Route path={"/six"} element={<Six/>}/>
                <Route path={"/ten"} element={<Ten/>}/>
            </Routes>
        </HashRouter>
    );
};