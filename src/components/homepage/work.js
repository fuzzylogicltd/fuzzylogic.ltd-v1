import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import * as styles from "./work.module.css";

import WorkItem from "./workItem";

const work = () => {
    return (
        <StaticQuery
        query={graphql`
        query WorkQuery {
            allMarkdownRemark(
              sort: {fields: [frontmatter___sortOrder], order: ASC}
              filter: {fileAbsolutePath: {regex: "/(work)/"  }}
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    title
                    sortOrder
                    image {
                      childImageSharp {
                        gatsbyImageData(
                          width: 300
                          quality: 90
                          )
                      }
                    }
                    blurb
                    tags
                    www
                    slug
                  }
                }
              }
            }
          }
        `}
        render={data => ( 
            <>
                <section id="work" className={styles.work}>
                    <div className="container">
                        <h2>Featured Work</h2>
                    </div>
                </section>

                <section className={styles.workcontent}>
                    <div className="container flex">
                        {data.allMarkdownRemark.edges.map(({ node }) => (
                            <WorkItem 
                            key={node.frontmatter.title}
                            name={node.frontmatter.title}
                            image={getImage(node.frontmatter.image)}
                            slug={node.frontmatter.slug}
                            blurb={node.frontmatter.blurb}
                            www={node.frontmatter.www}
                            casestudy={node.frontmatter.slug}
                            tags={node.frontmatter.tags} />
                        ))}
                    </div>
                </section>
            </>
        )} />
    )
}

export default work;