import React from 'react'
import styled from "styled-components"
import { Fade } from "react-awesome-reveal"

function Section(props) {
    return (
        <Wrap bgimg={props.backgroundImg}>
            <ItemText>
                <Fade direction="up" triggerOnce>
                    <ItemTextHeader>{props.title}</ItemTextHeader>
                    <ItemTextSubHeader>{props.description}</ItemTextSubHeader>
                </Fade>

                {!props.bottomButtons && (
                    <Fade direction="up" triggerOnce>
                        <ButtonGroup>
                            <LeftButton>{props.leftBtnText}</LeftButton>
                            {props.rightBtnText && (
                                <RightButton>{props.rightBtnText}</RightButton>
                            )}
                        </ButtonGroup>
                    </Fade>
                )}
            </ItemText>

            {props.bottomButtons && (
                <BottomButtonGroup>
                    <Fade direction="up" triggerOnce>
                        <LeftButton>{props.leftBtnText}</LeftButton>
                    </Fade>
                    {props.rightBtnText && (
                        <Fade direction="up" triggerOnce>
                            <RightButton>{props.rightBtnText}</RightButton>
                        </Fade>
                    )}
                </BottomButtonGroup>
            )}

            {props.hasDownArrow && (
                <ItemDownArrow src="/images/down-arrow.svg" />
            )}
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    z-index: 10;
    width: 100%;              /* was 100vw, which includes the scrollbar width */
    height: 100vh;
    height: 100svh;           /* fixes the mobile browser address-bar jump */
    overflow: hidden;         /* stops any child from widening the page */
    background-image: url(${props => props.bgimg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`

const ItemText = styled.div`
    padding-top: 15vh;
    width: 100%;
    text-align: center;
    padding-left: 16px;
    padding-right: 16px;
    box-sizing: border-box;
`

const ItemTextHeader = styled.h1`
    font-size: clamp(28px, 6vw, 40px);
    font-weight: 600;
    line-height: 1;
    margin-bottom: 5px;
    margin-top: 0px;
`

const ItemTextSubHeader = styled.h4`
    font-size: clamp(15px, 3vw, 20px);
    font-weight: 400;
    margin-bottom: 20px;
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }
`

const BottomButtonGroup = styled.div`
    position: absolute;
    bottom: 10vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;

    @media (max-width: 600px) {
        flex-direction: column;
        bottom: 12vh;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    max-width: 85vw;          /* never wider than the screen */
    flex-shrink: 0;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
`

const RightButton = styled(LeftButton)`
    background-color: rgba(255, 255, 255, 0.65);
    color: black;
`

const ItemDownArrow = styled.img`
    position: absolute;
    bottom: 2vh;
    left: 50%;
    transform: translateX(-50%);
    height: 40px;
    animation: animateDown infinite 1.5s;

    @keyframes animateDown {
        0% {
            bottom: 4vh;
            opacity: 0;
        }
        100% {
            bottom: 2vh;
            opacity: 1;
        }
    }
`