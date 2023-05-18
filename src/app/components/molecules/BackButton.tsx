import React from "react";
import {useNavigate} from "react-router-dom";

export const BackButton = () => {
    const navigate = useNavigate();
    return(
        <React.Fragment>
            <button onClick={() => {navigate(-1)}}>戻る</button>
        </React.Fragment>
    )
};