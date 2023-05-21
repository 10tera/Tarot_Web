/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";
import React from "react";

type Props = {
    path:string;
};

const imgCss = css({
    height: "auto",
    width: "150px"
});

export const OpenNewWindow = ({path}: Props) => {
    const handleButtonClick = () => {
        const newWindow = window.open(path,"_blank");
        if(newWindow){
            newWindow.opener = null;
        }
    }
    return(
        <React.Fragment>
            <img css={imgCss} src={"./public/img/newwindow.png"} onClick={handleButtonClick}></img>
        </React.Fragment>
    )
}