/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";
import React,{useState,useRef,useEffect} from "react";
import {Link} from "react-router-dom";

type Props = {
    path: string,
    mode: string,
    info: string,
    infoTitle: string,
    isShowInfo: boolean,
    hanten: boolean,
}

const getRandomBool = () => {
    return Math.random() > 0.5;
}


const CardCss = css({
    width: "100%",
    height: "200px",
    //height: "276.83px",
    cursor: "pointer",
    position: "relative",
    display: "flex",
    justifyContent: "center"
});


const activeFrontCss = css({
    width:"auto",
    height: "100%",
    position: "absolute",
    margin: "0 auto",
    //left: "0",
    //top: "0",
    backfaceVisibility: "hidden",
    transition: "all 0.6s",
    transform: "rotateY(0)",
});

const defaultFrontCss = css({
    width: "auto",
    height: "100%",
    position: "absolute",
    margin: "0 auto",
    //left: "0",
    //top: "0",
    backfaceVisibility: "hidden",
    transition: "all 0.6s",
    transform: "rotateY(-180deg)",
});

const activeBackCss = css({
    width:"auto",
    height: "100%",
    position: "absolute",
    margin: "0 auto",
    //left: "0",
    //top: "0",
    backfaceVisibility: "hidden",
    transition: "all 0.6s",
    transform: "rotateY(180deg)",
});

const defaultBackCss = css({
    width: "auto",
    height: "100%",
    position: "absolute",
    margin: "0 auto",
    //left: "0",
    //top: "0",
    backfaceVisibility: "hidden",
    transition: "all 0.6s",
});

const activeFrontCss2 = css({
    width: "auto",
    height: "100%",
    position: "absolute",
    margin: "0 auto",
    //left: "0",
    //top: "0",
    backfaceVisibility: "hidden",
    transition: "all 0.6s",
    transform: "rotateY(0) scaleY(-1)",
});

const defaultFrontCss2 = css({
    width: "auto",
    height: "100%",
    position: "absolute",
    margin: "0 auto",
    //left: "0",
    //top: "0",
    backfaceVisibility: "hidden",
    transition: "all 0.6s",
    transform: "rotateY(-180deg) scaleY(-1)",
});

const activeBackCss2 = css({
    width: "auto",
    height: "100%",
    position: "absolute",
    margin: "0 auto",
    //left: "0",
    //top: "0",
    backfaceVisibility: "hidden",
    transition: "all 0.6s",
    transform: "rotateY(180deg) scaleY(-1)",
});

const defaultBackCss2 = css({
    width: "auto",
    height: "100%",
    position: "absolute",
    margin: "0 auto",
    //left: "0",
    //top: "0",
    backfaceVisibility: "hidden",
    transition: "all 0.6s",
    transform: "scaleY(-1)"
});


const activePCss = css({
    overflowWrap: "break-word",
    transition: "all 0.6s",
    whiteSpace: "pre-wrap",
    margin : "0 auto"
});

const defaultPCss = css({
    overflowWrap: "break-word",
    transition: "all 0.6s",
    whiteSpace: "pre-wrap",
    opacity: "0",
});

const activeLinkCss = css({
    transition: "all 0.6s",
});

const defaulLinkCss = css({
    opacity: "0",
    transition: "all 0.6s",
});

const activeH3Css = css({
    textAlign: "center",
    transition: "all 0.6s",
});

const defaultH3Css = css({
    textAlign: "center",
    transition: "all 0.6s",
    opacity: "0",
});


export const Card = ({path,mode,info,isShowInfo,infoTitle,hanten}: Props) => {
    const [isClick,setIsClick] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const handleCardClick = () => {
        if(!isClick){
            setIsClick(true);
            return;
        }
    }

    useEffect(() => {
        /*
        window.addEventListener("resize",() => {
            const parent = cardRef.current;
            if (!parent) return;
            const child = parent.querySelector("div");
            if(!child)return;
            parent.style.height = `${child.offsetHeight}px`
        });
        const parent = cardRef.current;
        if (!parent) return;
        const child = parent.querySelector("div");
        if (!child) return;
        parent.style.height = `${child.offsetHeight}px`
        */
    },[]);
    
    return(
        <React.Fragment>
            <div css={CardCss} ref={cardRef}>
                {
                    (() => {
                        if(hanten){
                            return(
                                <React.Fragment>
                                    <div css={isClick ? activeFrontCss : defaultFrontCss}>
                                        <img src={`./public/img/card/${mode}/${path}.png`} css={{ height: "100%", margin: "0 auto" }}></img>
                                    </div>
                                    <div css={isClick ? activeBackCss : defaultBackCss} onClick={handleCardClick}>
                                        <img src={`./public/img/card/${mode}/back.png`} css={{ height: "100%", margin: "0 auto" }}></img>
                                    </div>
                                </React.Fragment>
                            )
                        }
                        else{
                            return(
                                <React.Fragment>
                                    <div css={isClick ? activeFrontCss2 : defaultFrontCss2}>
                                        <img src={`./public/img/card/${mode}/${path}.png`} css={{ height: "100%", margin: "0 auto" }}></img>
                                    </div>
                                    <div css={isClick ? activeBackCss2 : defaultBackCss2} onClick={handleCardClick}>
                                        <img src={`./public/img/card/${mode}/back.png`} css={{ height: "100%", margin: "0 auto" }}></img>
                                    </div>
                                </React.Fragment>
                            )
                        }
                    })()
                }
            </div>
            <h3 css={isClick ? activeH3Css : defaultH3Css}>{infoTitle}</h3>
            {
                isShowInfo ? <div>
                    <p css={isClick ? activePCss : defaultPCss}>{info}</p>
                    <br/>
                    <Link css={isClick ? activeLinkCss : defaulLinkCss} to={`/info/${mode}?path=${path}`}>【絵柄に含まれている主な要素】</Link>
                    <br/>
                </div>
                 : null
            }
        </React.Fragment>
    )
}