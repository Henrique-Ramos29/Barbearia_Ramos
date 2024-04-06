import React, { useState } from "react";
import Button from "../Button";
import './index.css';


const MenuResponsivel = () => {
    const [isOpen, setIsOpen] = useState(false);

     const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={`menu ${isOpen ? 'open' : ''}`}>
            <Button className="menu-toggle" onClick={toggleMenu}>
                Menu
            </Button>
            <ul className="menu-list">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
            
    )
}

export default MenuResponsivel;