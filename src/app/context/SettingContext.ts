import React,{createContext,Dispatch,SetStateAction} from "react";

type SettingValue = {
    mode: string;
    setMode: Dispatch<SetStateAction<string>>;
};

export const SettingContext = createContext<SettingValue | undefined>(undefined);