import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false)
    const cars = useSelector(selectCars)

    return (
        <Container>
            <a href="/">
                <img src="/images/logo.svg" alt="" />
            </a>

            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
            </Menu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)}>
                    <MenuIcon />
                </CustomMenu>
            </RightMenu>

            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
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
        width: 130px;
        margin-top: 4px;
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

    @media(max-width: 768px) {
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
`

const CustomMenu = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: 15px;

    svg {
        width: 20px;
    }
`

const CustomClose = styled(CloseIcon)`
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
    width: 300px;
    background-color: white;
    box-shadow: -4px 0 12px rgba(0, 0, 0, 0.15);
    list-style: none;
    padding: 20px;
    margin: 0;
    box-sizing: border-box;
    z-index: 20;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
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
`