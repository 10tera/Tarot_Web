/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";
import React,{useState,useMemo} from "react";
import { Link } from "react-router-dom";
import { ModeSelect } from "../molecules/ModeSelect";

const LinkCss = css({
    margin: "10px 0 10px 50px"
});

const LinkWrapCss = css({
});

const TitleCss = css({
    textAlign: "center"
});

export const TopPage = () => {
    const [mode,setMode] = useState("default");
    const memoizedMode = useMemo(() => mode,[mode]);
    return(
        <React.Fragment>
            <div css={TitleCss}>
                <h1>タロット占いツール</h1>
            </div>
            <section>
                <ModeSelect setSelectedMode={setMode}></ModeSelect>
                {mode}
            </section>
            <section>
                <ul css={LinkWrapCss}>
                    <li css={LinkCss}>
                        <Link to={`/one?card=1`}>1枚引き</Link>
                    </li>
                    <li css={LinkCss}>
                        <Link to={"/two"}>2枚引き</Link>
                    </li>
                    <li css={LinkCss}>
                        <Link to={"/third"}>3枚引き</Link>
                    </li>
                    <li css={LinkCss}>
                        <Link to={"/five"}>5枚引き</Link>
                    </li>
                    <li css={LinkCss}>
                        <Link to={"/six"}>6枚引き</Link>
                    </li>
                    <li css={LinkCss}>
                        <Link to={"/ten"}>10枚引き</Link>
                    </li>
                    
                </ul>
            </section>
        </React.Fragment>
    )
}