import React,{createContext,Dispatch,SetStateAction} from "react";
import { Mode } from "../utils/pickCards";

type SettingValue = {
    mode: Mode;
    setMode: Dispatch<SetStateAction<Mode>>;
};

export const SettingContext = createContext<SettingValue | undefined>(undefined);