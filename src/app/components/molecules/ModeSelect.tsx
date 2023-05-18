import React, { ChangeEventHandler,useContext } from "react";
import Config from "../../../../public/config.json";
import { SettingContext } from "../../context/SettingContext";

type Props = {
    setSelectedMode: (mode:string) => void;
}

export const ModeSelect = ({setSelectedMode}: Props) => {
    const settingContext = useContext(SettingContext);
    const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
        switch (event.target.value) {
            case "猫丸タロットカード「SUN」":
                setSelectedMode("SUN");
                break;
            case "猫丸タロットカード「MOON」":
                setSelectedMode("MOON");
                break;
            default:
                setSelectedMode("SUN");
                break;
        }
    };

    return(
        <select onChange={handleSelectChange} defaultValue={settingContext?.mode}>
            {
                Config.mode.map((value,_value_i) => {
                    return(<option key={value}>{value}</option>)
                })
            }
        </select>
    )
}