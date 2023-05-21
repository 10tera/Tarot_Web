/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";
import React,{useEffect} from "react";
import {useLocation} from "react-router-dom";

import Config from "../../../../../public/config.json";

const h1Css = css({
    textAlign: "center"
});

const h3Css = css({
    textAlign: "center"
});
const imgDivCss = css({
    width: "200px",
    margin: "0 auto"
});
const imgCss = css({
    width: "100%",
    height: "auto",
});

const cardInfoCss = css({
    //textAlign: "center"
});

const divCss = css({
    width: "600px",
    margin: "0 auto"
});

const pCss = css({
    overflowWrap: "break-word",
    whiteSpace: "pre-wrap"
});

export const MoonInfo = () => {
    const loc = useLocation();
    useEffect(() => {
        const searchParams = new URLSearchParams(loc.search);
        const path = searchParams.get("path");
        if(!path)return;
        const element = document.getElementById(`cardInfo-${path}`);
        if(element){
            element.scrollIntoView();
        }
    },[]);
    return(
        <React.Fragment>
            <div css={divCss}>
                <h1 css={h1Css}>猫丸タロットカード「MOON」一覧</h1>
                {
                    Config.MOON.map((card, _cardi) => {
                        return (
                            <div id={`cardInfo-${card[0]}`} key={`cardInfo-${card[0]}`} css={cardInfoCss}>
                                <h3 css={h3Css}>{card[1]}</h3>
                                <div css={imgDivCss}>
                                    <img css={imgCss} src={`./public/img/card/MOON/${card[0]}.png`}></img>
                                </div>
                                <p css={pCss}>{card[2]}</p>
                                <p css={pCss}>{card[3]}</p>
                            </div>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}