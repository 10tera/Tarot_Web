/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";
import React,{useContext} from "react";
import { Link,useNavigate } from "react-router-dom";
import { ModeSelect } from "../molecules/ModeSelect";
import { SettingContext } from "../../context/SettingContext";

const LinkCss = css({
    margin: "10px 0 0 0",
});

const LinkWrapCss = css({
});

const TitleCss = css({
    textAlign: "center"
});

const selectCss = css({
    display: "flex",
    flexWrap: "wrap",
    width: "70%",
    maxWidth: "800px",
    margin: "0 auto",
    justifyContent: "center"
});

const eachSelectCss = css({
    width: "50%",
    alignItems: "center",
    minWidth: "400px",
    marginTop: "100px"
});

const h3Css = css({
    textAlign: "center",
});

const imgCss = css({
    width: "50%",
    height: "auto",
    margin: "0 25% 0 25%",
});

const spanCss = css({
    display: "inline-block",
    //whiteSpace:"nowrap"
});

export const TopPage = () => {
    const settingContext = useContext(SettingContext);
    const navigate = useNavigate();
    const setMode = (mode:string) => {
        settingContext?.setMode(mode);
    }
    const setModeSun = () => {
        settingContext?.setMode("SUN");
    }
    const setModeMoon = () => {
        settingContext?.setMode("MOON");
    }
    return(
        <React.Fragment>
            <div css={TitleCss}>
                <h1>猫丸タロット占いツールver.1</h1>
            </div>
            <div css={selectCss}>
                <div css={eachSelectCss}>
                    <img css={imgCss} onClick={() => { navigate("/info/SUN") }} src={"./public/img/card/SUN/back.png"}></img>
                    <h3 css={h3Css} onClick={() => {navigate("/info/SUN")}}>猫丸タロットカード「SUN」</h3>
                    <ul css={LinkWrapCss}>
                        <li css={LinkCss}>
                            <Link to={`/one`} onClick={setModeSun}>1枚引き</Link>
                        </li>
                        <li css={LinkCss}>
                            <Link to={"/two"} onClick={setModeSun}>2枚引き</Link>
                        </li>
                        <li css={LinkCss}>
                            <Link to={"/third"} onClick={setModeSun}>3枚引き</Link>
                        </li>
                        <li css={LinkCss}>
                            <Link to={"/five"} onClick={setModeSun}>5枚引き<wbr />(ギリシャ十字)</Link>
                        </li>
                        <li css={LinkCss}>
                            <Link to={"/six"} onClick={setModeSun}>6枚引き<wbr />(ピラミッド)</Link>
                        </li>
                        <li css={LinkCss}>
                            <Link to={"/nine"} onClick={setModeSun}>9枚引き<wbr/>(スピリチュアルスプレッド)</Link>
                        </li>

                    </ul>
                </div>
                <div css={eachSelectCss}>
                    <img css={imgCss} onClick={() => { navigate("/info/MOON") }} src={"./public/img/card/MOON/back.png"}></img>
                    <h3 css={h3Css} onClick={() => { navigate("/info/MOON") }}>猫丸タロットカード「MOON」</h3>
                    <ul css={LinkWrapCss}>
                        <li css={LinkCss}>
                            <Link to={`/one`} onClick={setModeMoon}>1枚引き</Link>
                        </li>
                        <li css={LinkCss}>
                            <Link to={"/two"} onClick={setModeMoon}>2枚引き</Link>
                        </li>
                        <li css={LinkCss}>
                            <Link to={"/third"} onClick={setModeMoon}>3枚引き</Link>
                        </li>
                        <li css={LinkCss}>
                            <Link to={"/five"} onClick={setModeMoon}>5枚引き<wbr />(ギリシャ十字)</Link>
                        </li>
                        <li css={LinkCss}>
                            <Link to={"/six"} onClick={setModeMoon}>6枚引き<wbr />(ピラミッド)</Link>
                        </li>
                        <li css={LinkCss}>
                            <Link to={"/nine"} onClick={setModeMoon}>9枚引き<wbr />(スピリチュアルスプレッド)</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}