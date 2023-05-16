import React, { ChangeEventHandler } from "react";
import Config from "../../../../public/config.json";

type Props = {
    setSelectedMode: (mode:string) => void;
}

export const ModeSelect = ({setSelectedMode}: Props) => {
    const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
        setSelectedMode(event.target.value);
    };

    return(
        <select onChange={handleSelectChange} defaultValue={"default"}>
            {
                Config.mode.map((value,_value_i) => {
                    return(<option key={value}>{value}</option>)
                })
            }
        </select>
    )
}