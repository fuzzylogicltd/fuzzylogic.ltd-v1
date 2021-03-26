import React from 'react';
import * as styles from "./footerSocialIcon.module.css"

const FooterSocialIcon = function footerSocialIcon(props) {
    return (
        <a href={props.url} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 512 512" className={styles.footericon}>
                <title>{props.name}</title>
                <path d={props.path} />
            </svg>
        </a>
    )
}

export default FooterSocialIcon;
