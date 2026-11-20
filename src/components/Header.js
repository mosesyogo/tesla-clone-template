import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false)
    const cars = useSelector(selectCars)

    // Close the menu with the Escape key
    useEffect(() => {
        if (!burgerStatus) return undefined
        const onKeyDown = (e) => {
            if (e.key === 'Escape') setBurgerStatus(false)
        }
        document.addEventListener('keydown', onKeyDown)
        return () => document.removeEventListener('keydown', onKeyDown)
    }, [burgerStatus])

    return (
        <Container>
            <a href="/">
                <img src="/images/logo.svg" alt="Tesla" />
            </a>

            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
            </Menu>

            <RightMenu>
                <a className="top-link" href="#">Shop</a>
                <a className="top-link" href="#">Tesla Account</a>
                <CustomMenu
                    type="button"
                    aria-label="Open menu"
                    aria-expanded={burgerStatus}
                    onClick={() => setBurgerStatus(true)}
                >
                    <MenuIcon />
                </CustomMenu>
            </RightMenu>

            <Overlay $show={burgerStatus} onClick={() => setBurgerStatus(false)} />

            <BurgerNav $show={burgerStatus} aria-hidden={!burgerStatus}>
                <CloseWrapper>
                    <CloseButton
                        type="button"
                        aria-label="Close menu"
                        onClick={() => setBurgerStatus(false)}
                    >
                        <CloseIcon />
                    </CloseButton>
                </CloseWrapper>

                {cars && cars.map((car) => (
                    <li key={car.id}>
                        <a href="#">{car.name}</a>
                    </li>
                ))}

                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Test Drive</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Careers</a></li>

                {/* These two are hidden in the top bar on phones, so they live here */}
                <li className="mobile-only"><a href="#">Shop</a></li>
                <li className="mobile-only"><a href="#">Tesla Account</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 16;
    box-sizing: border-box;

    img {
        display: block;
        width: 130px;
        margin-top: 4px;
    }

    @media (max-width: 768px) {
        padding: 0 12px;

        img {
            width: 100px;
        }
    }

    @media (max-width: 360px) {
        padding: 0 8px;

        img {
            width: 88px;
        }
    }
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        color: black;
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        white-space: nowrap;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a {
        color: black;
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        margin: 0 10px;
        white-space: nowrap;
        text-transform: uppercase;
    }

    /* On phones only the menu button stays in the bar */
    @media (max-width: 768px) {
        .top-link {
            display: none;
        }
    }
`

const CustomMenu = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 44px;
    min-height: 44px; /* comfortable thumb target */
    margin-left: 5px;
    padding: 0;
    border: 0;
    background: none;
    color: black;
    cursor: pointer;

    svg {
        width: 24px;
        height: 24px;
    }
`

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 19;
    opacity: ${props => props.$show ? 1 : 0};
    visibility: ${props => props.$show ? 'visible' : 'hidden'};
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
`

const CloseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 44px;
    min-height: 44px;
    padding: 0;
    border: 0;
    background: none;
    color: black;
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

const BurgerNav = styled.ul`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    height: 100dvh; /* fixes the mobile browser address-bar jump */
    width: 300px;
    max-width: 85vw; /* never wider than the phone screen */
    background-color: white;
    box-shadow: -4px 0 12px rgba(0, 0, 0, 0.15);
    list-style: none;
    padding: 20px;
    margin: 0;
    box-sizing: border-box;
    z-index: 20;
    transform: ${props => props.$show ? 'translateX(0)' : 'translateX(100%)'};
    visibility: ${props => props.$show ? 'visible' : 'hidden'};
    transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;
    overflow-y: auto;

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }

    a {
        display: block;
        color: black;
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        text-align: left;

        &:hover {
            opacity: 0.6;
        }
    }

    /* Shop and Account only appear here on phones */
    .mobile-only {
        display: none;
    }

    @media (max-width: 768px) {
        .mobile-only {
            display: block;
        }
    }
`