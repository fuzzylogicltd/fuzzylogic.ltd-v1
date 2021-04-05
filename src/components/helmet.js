import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import {Helmet} from "react-helmet";

const helmet = (props) => {
    return (        
    <StaticQuery
        query={graphql`
        query HelmetQuery {
            site {
              siteMetadata {
                rootURL
                title
              }
            }
          }
        `}
        render={data => (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{props.title}</title>
            <link rel="canonical" href={`${data.site.siteMetadata.rootURL}/${props.slug}`} />
        </Helmet>
        )} />
    )
}

export default helmet
