/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";
import React from "react";
import {useNavigate} from "react-router-dom";

const imgCss = css({
    height: "auto",
    width: "150px"
});

export const BackButton = () => {
    const navigate = useNavigate();
    return(
        <React.Fragment>
            <img css={imgCss} src={"./public/img/backbutton.png"} onClick={() => { navigate(-1) }}></img>
        </React.Fragment>
    )
};