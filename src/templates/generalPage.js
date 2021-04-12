import React from 'react'
import { graphql } from "gatsby";
import Helmet from "../components/helmet";
import Layout from "../components/layout";

export default function generalPage({ data }) {
    const { markdownRemark } = data 
    const { frontmatter, html } = markdownRemark
    return (
        <Layout>
            <Helmet slug={frontmatter.slug} title={`${frontmatter.title} - fuzzylogic.ltd`} />

            <section className="pageHeadline">
            <div class="container">
                <h1>{frontmatter.title}</h1>
            </div>
            </section>
            <section class="content">
                <article className="container">
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
      }
    }
  }
`
