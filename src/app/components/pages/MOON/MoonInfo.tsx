/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";
import React,{useEffect} from "react";
import {useLocation} from "react-router-dom";

import { moonConfig, cardInfo } from "../../../constants/config";

const h1Css = css({
    textAlign: "center"
});

const h3Css = css({
    textAlign: "center"
});
const imgDivCss = css({
    width: "400px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center"
});
const img1Css = css({
    width: "50%",
    height: "auto",
    marginRight: "5px"
});

const img2Css = css({
    width: "50%",
    height: "auto",
    marginLeft: "5px"
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
                <h1 css={h1Css}>ユウトタロットカード「MOON」一覧</h1>
                <div css={infosCss}>
                    {
                        moonConfig.map((item) => {
                            if (item.key.endsWith("3")) return null;
                            const info = cardInfo[item.infoKey];
                            const key3 = item.key.slice(0, -1) + "3";
                            return (
                                <div id={`cardInfo-${item.key}`} key={`cardInfo-${item.key}`} css={cardInfoCss}>
                                    <div id={`cardInfo-${key3}`}/>
                                    <h3 css={h3Css}>{info.title}</h3>
                                    <div css={imgDivCss}>
                                        <img css={img1Css} src={`./public/img/card/MOON/${item.key}.png`}></img>
                                        <img css={img2Css} src={`./public/img/card/MOON/${key3}.png`}></img>
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