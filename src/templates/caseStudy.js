import React from 'react';
import Helmet from "../components/helmet";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import * as styles from './caseStudy.module.css';

export default function caseStudy({ data }) {
    const { markdownRemark } = data 
    const { frontmatter, html } = markdownRemark
    return (

        <Layout>

          <Helmet slug={frontmatter.slug} title={`${frontmatter.title} Case Study - fuzzylogic.ltd`} />

          <section className="pageHeadline">
            <div class="container">
              <h1>{frontmatter.title} Case&nbsp;Study</h1>
            </div>
          </section>
          <section class="content">
              <article className="container">
                
              { frontmatter.tags.split(",").map((tag) => <span key={tag} className={styles.caseStudyTag}>{tag}</span> ) }
                <div className={styles.caseStudyHeader}>
                  <div>
                    <GatsbyImage image={getImage(frontmatter.image)} alt={frontmatter.title} className={styles.caseStudyHeaderImage} />
                  </div>
                  <div className="caseStudyInfo">
                    { frontmatter.www ? <a href={frontmatter.www} className="linkbutton">Live site</a> : "" }
                    { frontmatter.git ? <a href={frontmatter.git} className="linkbutton">Code on GitHub</a> : "" }
                  </div>
                </div>

                <div dangerouslySetInnerHTML={{ __html: html }} />
              </article>
          </section>
        </Layout>

    )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        www
        git
        tags
        image {
          childImageSharp {
            gatsbyImageData(
              width: 300
              quality: 90
              )
          }
        }
      }
    }
  }
`
