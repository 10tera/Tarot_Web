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
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "5px"
});

const getRandomBool = () => {
    return Math.random() > 0.5;
}

export const Two = () => {
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
            for (let i = 0; i < 2; i++) {
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
            for (let i = 0; i < 2; i++) {
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
                    <h1 css={TitleCss}>2枚引き</h1>
                </div>
            </section>
            <section>
                <ul css={cardsUlCss}>
                    {
                        paths.map((p, pi) => {
                            return (
                                <li key={"li-" + p["path"]} css={cardLiCss}>
                                    <h3 css={h3Css}>{`${(pi + 1).toString()}枚目`}</h3>
                                    <div css={{ width: "auto" }}>
                                        <Card hanten={getRandomBool()} mode={settingContext?.mode ? settingContext.mode : "SUN"} path={p["path"]} infoTitle={p["infoTitle"]} info={p["info1"]} isShowInfo={true} />
                                    </div>
                                    <br/>
                                </li>
                            )
                        })
                    }
                </ul>
                <br />
                <div css={buttonsCss}>
                    <div css={css({
                        width: "200px",
                        textAlign: "center"
                    })}>
                        <BackButton />
                    </div>
                    <div css={css({
                        width: "200px",
                        textAlign: "center"
                    })}>
                        <OpenNewWindow path={`${window.location.pathname}`} />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}