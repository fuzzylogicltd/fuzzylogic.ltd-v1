exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
  
    const caseStudyTemplate = require.resolve(`./src/templates/caseStudy.js`)
    const generalPageTemplate = require.resolve(`./src/templates/generalPage.js`)
  
    const result = await graphql(`
    {
      work: allMarkdownRemark(
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
       miscpage: allMarkdownRemark(
            filter: {
              fileAbsolutePath: {regex: "/(miscpage)/"  }
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
  
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    result.data.work.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: caseStudyTemplate,
        context: {
          slug: node.frontmatter.slug,
        },
      })
    })

    result.data.miscpage.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: generalPageTemplate,
        context: {
          slug: node.frontmatter.slug,
        },
      })
    })

  }