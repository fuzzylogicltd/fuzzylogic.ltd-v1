import React from 'react';
import Helmet from "../components/helmet";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import * as styles from './badges.module.css';

const badges = () => {
    return (
        <StaticQuery
            query={graphql`
            query BadgesQuery {
                allMarkdownRemark(
                  sort: {fields: [frontmatter___sortOrder], order: ASC}
                  filter: {fileAbsolutePath: {regex: "/(badges)/"}}
                ) {
                  edges {
                    node {
                      id
                      frontmatter {
                        name
                        description
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

        <Layout>

          <Helmet slug={`/badges`} title={`Web Development Marit Badges - fuzzylogic.ltd`} />

          <section className="pageHeadline">
            <div class="container">
              <h1>Web Development Merit Badges&nbsp;Earned</h1>
            </div>
          </section>
          <section class="content">
              <article className="container">

                <p>Badges created by <a href="https://css-tricks.com/web-development-merit-badges/">Chris Coyier</a>. Awarded to me by me :)</p>

              {data.allMarkdownRemark.edges.map(({ node }) => (

                <div className={styles.badge}>
                    <img src={node.frontmatter.image.publicURL} width="200" height="200" alt={node.frontmatter.description} />
                    <p>
                        {node.frontmatter.description}
                    </p>
                </div>

                ))}

              </article>
          </section>
        </Layout>

    )} />
    )
}

export default badges;