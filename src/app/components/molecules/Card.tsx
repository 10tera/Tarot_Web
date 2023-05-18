/** @jsxImportSource @emotion/react */
/** @jsx jsx */
import { css } from "@emotion/react";
import React,{useState,useRef,useEffect,ReactNode} from "react";

type Props = {
    info: string,
    path: string,
    mode: string,
    title: string,
    infoTitle: string,
}

type ModalProps = {
    show:boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>,
    children: ReactNode
}

const CardCss = css({
    width: "90%",
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
    transform: "rotateY(0)",
    display: "block"
});

const defaultFrontCss = css({
    width: "100%",
    height: "max-content",
    position: "absolute",
    left: "0",
    top: "0",
    backfaceVisibility: "hidden",
    transition: "all 0.6s",
    transform: "rotateY(-180deg)",
    display: "block"
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
    transition: "all 0.6s",
    display: "block"
});

const pCss = css({
    overflowWrap: "break-word",
    transition: "all 0.6s",
    whiteSpace: "pre-wrap"
});

const overlayCss = css({
    position: "fixed",
    top:"0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "9998",
});

const contentCss = css({
    zIndex: "9999",
    width: "50%",
    padding: "1em",
    background: "#fff",
});

const Modal = ({show,setShow,children}:ModalProps) => {
    const closeModal = () => {
        setShow(false);
    };
    if(show){
        return(
            <div css={overlayCss} onClick={closeModal}>
                <div css={contentCss} onClick={(e) => e.stopPropagation()}>
                    {children}
                    <button onClick={closeModal}>閉じる</button>
                </div>
            </div>
        )
    }
    else{
        return null;
    }
}

export const Card = ({info,path,mode,title,infoTitle}: Props) => {
    const [isClick,setIsClick] = useState(false);
    const [isModalOpen,setIsModalOpen] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const handleCardClick = () => {
        if(!isClick){
            setIsClick(true);
            return;
        }
        setIsModalOpen(true);
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
            <p>{title}</p>
            <div css={CardCss} onClick={handleCardClick} ref={cardRef}>
                <div className={"card-child"} css={isClick ? activeFrontCss : defaultFrontCss}>
                    <img src={`./public/img/card/${mode}/${path}.png`} css={{width: "100%",height: "auto"}}></img>
                </div>
                <div css={isClick ? activeBackCss : defaultBackCss}>
                    <img src={`./public/img/card/${mode}/back.png`} css={{ width: "100%", height: "auto" }}></img>
                </div>
            </div>
            <div>
                <Modal show={isModalOpen} setShow={setIsModalOpen}>
                    <h4>{infoTitle}</h4>
                    <p css={pCss}>{info}</p>
                </Modal>
            </div>
        </React.Fragment>
    )
}