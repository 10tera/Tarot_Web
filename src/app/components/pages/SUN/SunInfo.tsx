/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";
import React,{useEffect} from "react";
import {useLocation} from "react-router-dom";

import { sunConfig, cardInfo } from "../../../constants/config";

const h1Css = css({
    textAlign: "center",
    width: "100%",
    
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

const infosCss = css({
    width: "90%",
    margin: "0 auto",
});


export const SunInfo = () => {
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
                <h1 css={h1Css}>ユウトタロットカード「SUN」一覧</h1>
                <div css={infosCss}>
                    {
                        sunConfig.map((item) => {
                            const info = cardInfo[item.infoKey];
                            return (
                                <div id={`cardInfo-${item.key}`} key={`cardInfo-${item.key}`} css={cardInfoCss}>
                                    <h3 css={h3Css}>{info.title}</h3>
                                    <div css={imgDivCss}>
                                        <img css={imgCss} src={`./public/img/card/SUN/${item.key}.png`}></img>
                                    </div>
                                    <p css={pCss}>{`【正位置の場合】\n${info.upright}`}</p>
                                    <br/>
                                    <p css={pCss}>{`【逆位置の場合】\n${info.reversed}`}</p>
                                    <br/>
                                </div>
                            )
                        })
                    }
                </div>
                
            </div>
        </React.Fragment>
    )
}