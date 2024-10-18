import React from 'react';
import { BiSolidHome, BiCut, BiSolidMap, BiSolidUserCircle, BiSolidTrophy, BiSolidCool, BiSolidStoreAlt } from "react-icons/bi"
import './index.css'
import MenuLink from '../MenuLink';

const MenuBar = () => {
    return (
        <nav className="menu-bar">
            <MenuLink to={'/'}>
                <a><BiSolidHome /></a>
            </MenuLink>

            <MenuLink to={'/servico'}>
                <a><BiCut /></a>
            </MenuLink>

            <MenuLink to={"/map"}>
                <a><BiSolidMap /></a>
            </MenuLink>

            <MenuLink to={'/contato'}>
                <a><BiSolidUserCircle /></a>
            </MenuLink>

            <MenuLink to={'/fidelidade'}>
                <a><BiSolidTrophy /></a>
            </MenuLink>
        </nav>
    );
};

export default MenuBar;
