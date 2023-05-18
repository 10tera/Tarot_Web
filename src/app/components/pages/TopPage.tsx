/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";
import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { ModeSelect } from "../molecules/ModeSelect";
import { SettingContext } from "../../context/SettingContext";

const LinkCss = css({
    margin: "10px 0 10px 50px"
});

const LinkWrapCss = css({
});

const TitleCss = css({
    textAlign: "center"
});

export const TopPage = () => {
    const settingContext = useContext(SettingContext);
    const setMode = (mode:string) => {
        settingContext?.setMode(mode);
    }
    return(
        <React.Fragment>
            <div css={TitleCss}>
                <h1>猫丸タロット占いツールver.1</h1>
            </div>
            <section>
                <ModeSelect setSelectedMode={setMode}></ModeSelect>
            </section>
            <section>
                <ul css={LinkWrapCss}>
                    <li css={LinkCss}>
                        <Link to={`/one`}>1枚引き</Link>
                    </li>
                    <li css={LinkCss}>
                        <Link to={"/two"}>2枚引き</Link>
                    </li>
                    <li css={LinkCss}>
                        <Link to={"/third"}>3枚引き</Link>
                    </li>
                    <li css={LinkCss}>
                        <Link to={"/five"}>5枚引き(ギリシャ十字)</Link>
                    </li>
                    <li css={LinkCss}>
                        <Link to={"/six"}>6枚引き(ピラミッド)</Link>
                    </li>
                    <li css={LinkCss}>
                        <Link to={"/ten"}>10枚引き(ケルト十字)</Link>
                    </li>
                    
                </ul>
            </section>
        </React.Fragment>
    )
}