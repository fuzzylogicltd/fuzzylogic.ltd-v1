exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
  
    const blogPostTemplate = require.resolve(`./src/templates/caseStudy.js`)
  
    const result = await graphql(`
    {
      allMarkdownRemark(
              filter: {
                fileAbsolutePath: {regex: "/(work)/"  }
                frontmatter: { slug: { ne: "" } }
              }
        
              limit: 1000
            ) {
              edges {
                node {
                  frontmatter {
                    slug
                  }
                }
              }
            }
          }
    `)
  
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: blogPostTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    })
  }