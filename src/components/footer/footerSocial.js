import React from 'react';
import {StaticQuery, graphql} from "gatsby";
import * as styles from "./footerSocial.module.css";

import FooterSocialIcon from "./footerSocialIcon";

const FooterSocial = () => {
    return (
    <StaticQuery
        query={graphql`
        query FooterSocialQuery {
            allMarkdownRemark(
              sort: {fields: [frontmatter___sortOrder], order: ASC}
              filter: {fileAbsolutePath: {regex: "/(social)/"}}
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    name
                    url
                    path
                  }
                }
              }
            }
          }
          
        `}
        render={data => ( 

        <div className={styles.footersocial}>

            {data.allMarkdownRemark.edges.map(({ node }) => (

                <FooterSocialIcon 
                    key={node.frontmatter.name}
                    name={node.frontmatter.name}
                    url={node.frontmatter.url}
                    path={node.frontmatter.path} />
            ))}

        </div>
        )} />

    )
}

export default FooterSocial;
