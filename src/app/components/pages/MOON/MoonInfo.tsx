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
                <h1 css={h1Css}>猫丸タロットカード「MOON」一覧</h1>
                <div css={infosCss}>
                    {
                        Config.MOON.map((card, _cardi) => {
                            if(card[0][card[0].length-1] === "3")return null;
                            return (
                                <div id={`cardInfo-${card[0]}`} key={`cardInfo-${card[0]}`} css={cardInfoCss}>
                                    <div id={`cardInfo-${card[0].slice(0,-1)+"3"}`}/>
                                    <h3 css={h3Css}>{card[1]}</h3>
                                    <div css={imgDivCss}>
                                        <img css={img1Css} src={`./public/img/card/MOON/${card[0]}.png`}></img>
                                        <img css={img2Css} src={`./public/img/card/MOON/${card[0].slice(0,-1)}3.png`}></img>
                                    </div>
                                    <p css={pCss}>{card[2]}</p>
                                    <p css={pCss}>{card[3]}</p>
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