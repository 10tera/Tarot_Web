import React from "react";

type Props = {
    path:string;
};

export const OpenNewWindow = ({path}: Props) => {
    const handleButtonClick = () => {
        const newWindow = window.open(path,"_blank");
        if(newWindow){
            newWindow.opener = null;
        }
    }
    return(
        <React.Fragment>
            <button onClick={handleButtonClick}>追加鑑定</button>
        </React.Fragment>
    )
}