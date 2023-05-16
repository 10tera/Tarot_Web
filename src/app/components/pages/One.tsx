/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";
import React,{useState,useMemo} from "react";
import {useLocation} from "react-router-dom";

const TitleCss = css({
    textAlign: "center"
});

const useQuery = () => {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
};

export const One = () => {
    const [cardMode,setCardMode] = useState("");
    const query = useQuery();
    const card = query.get("card");
    if(card){
        setCardMode(card)
    }
    else{
        setCardMode("default");
    }
    return(
        <React.Fragment>
            <section>
                <div>
                    <h1 css={TitleCss}>一枚引き</h1>
                </div>
            </section>
            
        </React.Fragment>
    )
}