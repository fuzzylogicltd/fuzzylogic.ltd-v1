import React from 'react';
import * as styles from "./menu.module.css";

const Menu = (props) => {
    return (
        <div className={` ${styles.menu } ${props.open ? `${styles.open}` : ""}`}>
            <ul>
                <li><span><a href="/#about">About</a></span></li>
                <li><span><a href="/#work">Work</a></span></li>
                <li><span><a href="/#contact">Contact</a></span></li>
            </ul>
        </div>
    )
}

export default Menu;