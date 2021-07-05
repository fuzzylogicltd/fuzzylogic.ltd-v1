import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const helmet = props => {
  return (
    <StaticQuery
      query={graphql`
        query HelmetQuery {
          site {
            siteMetadata {
              rootURL
              title
              description
            }
          }
        }
      `}
      render={data => (
        <Helmet htmlAttributes={{ lang: 'en' }}>
          <meta charSet="utf-8" />
          <title>{props.title}</title>
          <link rel="canonical" href={`${data.site.siteMetadata.rootURL}/${props.slug}`} />

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/assets/site.webmanifest" />
          <link rel="icon" href="/icon.svg" type="image/svg+xml" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="description" content={props.description} />
        </Helmet>
      )}
    />
  )
}

export default helmet
