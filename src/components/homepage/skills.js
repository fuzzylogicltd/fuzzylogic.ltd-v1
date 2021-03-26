import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import * as styles from "./skills.module.css";

import SkillsItem from "./skillsItem";

const skills = () => {
    return (

        <StaticQuery
        query={graphql`
        query SkillsQuery {
            allMarkdownRemark(
              sort: {fields: [frontmatter___sortOrder], order: ASC}
              filter: {fileAbsolutePath: {regex: "/(skills)/"}}
            ) {
              edges {
                node {
                  id
                  html
                  frontmatter {
                    title
                    image {
                        publicURL
                    }
                  }
                }
              }
            }
          }
          
        `}
        render={data => ( 

            <section className={styles.skills}>
            <div className="container flex">

                {data.allMarkdownRemark.edges.map(({ node }) => (

                <SkillsItem 
                    key={node.frontmatter.title}
                    title={node.frontmatter.title}
                    html={node.html}
                    image={node.frontmatter.image.publicURL} />
                ))}
            </div>
            </section>
            
        )} />

    )
}

export default skills;
