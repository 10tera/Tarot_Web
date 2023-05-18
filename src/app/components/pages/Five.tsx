/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";
import React, { useContext, useEffect, useState } from "react";
import { SettingContext } from "../../context/SettingContext";
import { Card } from "../molecules/Card";
import Config from "../../../../public/config.json";
import { BackButton } from "../molecules/BackButton";
import { OpenNewWindow } from "../molecules/OpenNewWindow";

const TitleCss = css({
    textAlign: "center"
});

const cardLiCss = css({
    listStyle: "none",
    width: "31%",
    minWidth: "140px",
    margin: "3.5% 0 0 0",
    display: "list-item",
    //position: "relative",
});

const cardsUlCss = css({
    paddingTop: "10px",
    paddingLeft: "10px",
    height: "auto",
    display: "flex",
    width: "70%",
    maxWidth: "600px",
    //maxHeight: "600px",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "0 auto 2em",
    alignItems: "center",
});

const titles = [
    "1枚目：現状",
    "2枚目：障害",
    "3枚目：傾向",
    "4枚目：対策",
    "5枚目：結果"
];

export const Five = () => {
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
            for (let i = 0; i < 5; i++) {
                const rand = Math.floor(Math.random() * array.length);
                result.push({ path: array[rand][0], infoTitle: array[rand][1],info: array[rand][2] });
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
            for (let i = 0; i < 5; i++) {
                const rand = Math.floor(Math.random() * array.length);
                result.push({ path: array[rand][0], infoTitle: array[rand][1],info:array[rand][2] });
                array.splice(rand, 1);
            }
            setPaths([...result]);
        }
    }, []);
    return (
        <React.Fragment>
            <section>
                <div>
                    <h1 css={TitleCss}>5枚引き(ギリシャ十字)</h1>
                </div>
            </section>
            <section css={{ height: "auto" }}>
                <ul css={cardsUlCss}>
                    {
                        paths.map((p,pi) => {
                            return (
                                <li key={"li-" + p["path"]} css={cardLiCss}><Card infoTitle={p["infoTitle"]} mode={settingContext?.mode ? settingContext.mode : "SUN"} title={titles[pi]} path={p["path"]} info={p["info"]} /></li>
                            )
                        })
                    }
                </ul>
                <BackButton/>
                <OpenNewWindow path={`${window.location.pathname}`} />
            </section>
        </React.Fragment>
    )
}