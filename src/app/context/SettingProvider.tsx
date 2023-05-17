import {ReactNode,useState} from "react";
import { SettingContext } from "./SettingContext";

type Props = {
    children: ReactNode;
};

export const SettingProvider = ({children}: Props) => {
    const [mode,setMode] = useState("SUN");
    return(
        <SettingContext.Provider value={{mode:mode,setMode:setMode}}>
            {children}
        </SettingContext.Provider>
    )
}