/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";
import React, { useContext, useEffect, useState } from "react";
import { SettingContext } from "../../context/SettingContext";
import { Card } from "../molecules/Card";
import { BackButton } from "../molecules/BackButton";
import Config from "../../../../public/config.json";
import { OpenNewWindow } from "../molecules/OpenNewWindow";

const TitleCss = css({
    textAlign: "center"
});

const h3Css = css({
    textAlign: "center"
});

const pCss = css({
    overflowWrap: "break-word",
    transition: "all 0.6s",
    whiteSpace: "pre-wrap"
});

const cardLiCss = css({
    listStyle: "none",
    width: "100%",
    minWidth: "140px",
    margin: "3.5% 0 0 0",
    height: "auto",
});

const cardsUlCss = css({
    height: "100%",
    width: "70%",
    margin: "0 15% 0 15%",
    paddingLeft: "0px"
});

const buttonsCss = css({
    textAlign: "center",
    width: "100%"
});

const viewCss = css({
    margin: "0 auto",
    width: "50%"
});

const viewImgCss = css({
    width: "100%",
    height: "auto"
});

const titles = [
    "1枚目：現状",
    "2枚目：身体的な能力",
    "3枚目：精神的な能力",
    "4枚目：潜在能力・使命",
    "5枚目：感情のあり方",
    "6枚目：遺伝した能力",
    "7枚目：与えられた知恵",
    "8枚目：前世のカルマ",
    "9枚目：運命"
];

export const Nine = () => {
    const settingContext = useContext(SettingContext);
    const [isFirstRender, setIsFirstRender] = useState(true);
    const [paths, setPaths] = useState<{ [key: string]: string }[]>([]);
    useEffect(() => {
        if (!isFirstRender) return;
        setIsFirstRender(false);
        const mode = settingContext?.mode;
        if (!mode) {
            return;
        }
        if (mode === "SUN") {
            const array: string[][] = [];
            for (let i = 0; i < Config.SUN.length; i++) {
                array.push(Config.SUN[i]);
            }
            const result = [];
            for (let i = 0; i < 9; i++) {
                const rand = Math.floor(Math.random() * array.length);
                result.push({ path: array[rand][0], infoTitle: array[rand][1], info1: array[rand][2], info2: array[rand][3] });
                array.splice(rand, 1);
            }
            setPaths([...result]);
        }
        else if (mode === "MOON") {
            const array: string[][] = [];
            for (let i = 0; i < Config.MOON.length; i++) {
                array.push(Config.MOON[i]);
            }
            const result = [];
            for (let i = 0; i < 9; i++) {
                const rand = Math.floor(Math.random() * array.length);
                result.push({ path: array[rand][0], infoTitle: array[rand][1], info1: array[rand][2], info2: array[rand][3] });
                array.splice(rand, 1);
            }
            setPaths([...result]);
        }
    }, []);
    return (
        <React.Fragment>
            <section>
                <div>
                    <h1 css={TitleCss}>9枚引き(スピリチュアルスプレッド)</h1>
                </div>
                <div css={viewCss}>
                    <img css={viewImgCss} src={`./public/img/view/${settingContext?.mode}/9.png`}></img>
                </div>
            </section>
            <section>
                <ul css={cardsUlCss}>
                    {
                        paths.map((p, pi) => {
                            return (
                                <li key={"li-" + p["path"]} css={cardLiCss}>
                                    <h3 css={h3Css}>{titles[pi]}</h3>
                                    <div css={{ width: "auto" }}>
                                        <Card mode={settingContext?.mode ? settingContext.mode : "SUN"} path={p["path"]} infoTitle={p["infoTitle"]} info={p["info1"]} isShowInfo={true} />
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <div css={buttonsCss}>
                    <BackButton />
                    <OpenNewWindow path={`${window.location.pathname}`} />
                </div>
            </section>
        </React.Fragment>
    )
}