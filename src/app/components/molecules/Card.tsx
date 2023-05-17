/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";
import React,{useState,useRef,useEffect} from "react";

type Props = {
    info: string,
    path: string,
    mode: string
}

const CardCss = css({
    width: "100%",
    height: "276.83px",
    //height: "max-content",
    cursor: "pointer",
    position: "relative",
    "::before":{
        paddingTop: "300%",
    }
});


const activeFrontCss = css({
    width:"100%",
    height: "max-content",
    position: "absolute",
    left: "0",
    top: "0",
    backfaceVisibility: "hidden",
    transition: "all 0.6s",
    transform: "rotateY(0)", display: "block"
});

const defaultFrontCss = css({
    width: "100%",
    height: "max-content",
    position: "absolute",
    left: "0",
    top: "0",
    backfaceVisibility: "hidden",
    transition: "all 0.6s",
    transform: "rotateY(-180deg)", display: "block"
});

const activeBackCss = css({
    width:"100%",
    height: "max-content",
    position: "absolute",
    left: "0",
    top: "0",
    backfaceVisibility: "hidden",
    transition: "all 0.6s",
    transform: "rotateY(180deg)",
    display: "block"
});

const defaultBackCss = css({
    width: "100%",
    height: "max-content",
    position: "absolute",
    left: "0",
    top: "0",
    backfaceVisibility: "hidden",
    transition: "all 0.6s", display: "block"
});

const infoCss = css({
    overflowWrap: "break-word"
});

export const Card = ({info,path,mode}: Props) => {
    const [isClick,setIsClick] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const handleCardClick = () => {
        if(!isClick){
            setIsClick(true);
        }
    }

    useEffect(() => {
        window.addEventListener("resize",() => {
            const parent = cardRef.current;
            if (!parent) return;
            const child = parent.querySelector("div");
            if(!child)return;
            parent.style.height = `${child.offsetHeight}px`
        });
    },[]);
    return(
        <React.Fragment>
            <div css={CardCss} onClick={handleCardClick} ref={cardRef}>
                <div className={"card-child"} css={isClick ? activeFrontCss : defaultFrontCss}>
                    <img src={`./public/img/card/${mode}/${path}.png`} css={{width: "100%",height: "auto"}}></img>
                </div>
                <div css={isClick ? activeBackCss : defaultBackCss}>
                    <img src={`./public/img/card/${mode}/back.png`} css={{ width: "100%", height: "auto" }}></img>
                </div>
            </div>
            <p css={infoCss}>意味：{info}</p>
        </React.Fragment>
    )
}