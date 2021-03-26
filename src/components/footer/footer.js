import React from 'react';
import { StaticQuery, graphql, Link} from "gatsby";
import * as styles from "./footer.module.css"

import FooterSocial from './footerSocial';

const Footer = () => {
    return (
        <StaticQuery
        query={graphql`
        query FooterQuery {
            site {
              siteMetadata {
                copyright
              }
            }
          }
        `}
        render={data => (
        
        <footer>
            <div className="container flex">
                <FooterSocial />
                <div className={styles.footerinfo}>
                    <p>
                      <Link to="/badges/">Badges</Link>&nbsp;
                      <Link to="/uses/">Uses</Link>
                    </p>
                    <p>{data.site.siteMetadata.copyright}</p>
                </div>
            </div>
        </footer>
        )} />

    )
}

export default Footer;
