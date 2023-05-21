import React,{ HashRouter,Routes,Route } from "react-router-dom";
import {One,Two,Third,Five,Six,Nine,TopPage,SunInfo,MoonInfo} from "./components/pages";
import { SettingProvider } from "./context/SettingProvider";

export const App = () => {
    return (
        <HashRouter>
            <SettingProvider>
                <Routes>
                    <Route index path={"/"} element={<TopPage />} />
                    <Route path={"/one"} element={<One />} />
                    <Route path={"/two"} element={<Two />} />
                    <Route path={"/third"} element={<Third />} />
                    <Route path={"/five"} element={<Five />} />
                    <Route path={"/six"} element={<Six />} />
                    <Route path={"/nine"} element={<Nine />} />
                    <Route path={"/info/SUN"} element={<SunInfo/>}/>
                    <Route path={"/info/MOON"} element={<MoonInfo />} />
                </Routes>
            </SettingProvider>
        </HashRouter>
    );
};