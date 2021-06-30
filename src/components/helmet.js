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
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/assets/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#ff934f" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="description" content={props.description} />
        </Helmet>
      )}
    />
  )
}

export default helmet
