import React from 'react';
import { graphql } from "gatsby";
import Layout from "../components/layout";
//import { MDXRenderer } from "gatsby-plugin-mdx";
import * as styles from './caseStudy.module.css';

export default function caseStudy({ data }) {
    const { markdownRemark } = data 
    const { frontmatter, html } = markdownRemark
    return (

        <Layout>
          <section className={styles.pageHeadline}>
            <div class="container">
              <h1>{frontmatter.title}</h1>
            </div>
          </section>
          <section class="content">
            <div class="container">
            <div dangerouslySetInnerHTML={{ __html: html }} />
            {/* <MDXRenderer>{body}</MDXRenderer> */}
            </div>
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
      }
    }
  }
`
