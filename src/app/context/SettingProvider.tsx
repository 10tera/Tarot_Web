import {ReactNode,useState} from "react";
import { SettingContext } from "./SettingContext";
import { Mode } from "../utils/pickCards";

type Props = {
    children: ReactNode;
};

export const SettingProvider = ({children}: Props) => {
    const [mode,setMode] = useState<Mode>("SUN");
    return(
        <SettingContext.Provider value={{mode:mode,setMode:setMode}}>
            {children}
        </SettingContext.Provider>
    )
}