/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";
import React, { useContext, useEffect, useState } from "react";
import { SettingContext } from "../../context/SettingContext";
import { Card } from "../molecules/Card";
import Config from "../../../../public/config.json";

const TitleCss = css({
    textAlign: "center"
});

const cardLiCss = css({
    listStyle: "none",
    width: "31%",
    margin: "3.5% 0 0 0",
    display: "list-item",
    //position: "relative",
});

const cardsUlCss = css({
    paddingLeft: "0",
    height: "100%",
    display: "flex",
    //width: "50%",
    maxWidth: "600px",
    flexWrap: "wrap",
    justifyContent: "space-between",
});

export const Third = () => {
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
            for (let i = 0; i < 3; i++) {
                const rand = Math.floor(Math.random() * array.length);
                result.push({ "path": array[rand][0], info: array[rand][1] });
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
            for (let i = 0; i < 3; i++) {
                const rand = Math.floor(Math.random() * array.length);
                result.push({ "path": array[rand][0], info: array[rand][1] });
                array.splice(rand, 1);
            }
            setPaths([...result]);
        }
    }, []);
    return (
        <React.Fragment>
            <section>
                <div>
                    <h1 css={TitleCss}>3枚引き</h1>
                </div>
            </section>
            <section css={{ height: "800px" }}>
                <ul css={cardsUlCss}>
                    {
                        paths.map((p) => {
                            return (
                                <li key={"li-" + p["path"]} css={cardLiCss}><Card mode={settingContext?.mode ? settingContext.mode : "SUN"} path={p["path"]} info={p["info"]} /></li>
                            )
                        })
                    }
                </ul>
            </section>
        </React.Fragment>
    )
}