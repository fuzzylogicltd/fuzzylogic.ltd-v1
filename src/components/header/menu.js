import React from 'react';
import { Link } from 'gatsby';
import * as styles from "./menu.module.css";

const Menu = (props) => {
    return (
        <div className={` ${styles.menu } ${props.open ? `${styles.open}` : ""}`}>
            <ul>
                <li><Link to="/#about">About</Link></li>
                <li><Link to="/#work">Work</Link></li>
                <li><Link to="/#contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Menu;