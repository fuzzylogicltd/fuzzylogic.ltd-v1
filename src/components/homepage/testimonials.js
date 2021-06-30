import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import * as styles from "./testimonials.module.css"

const testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  }

  return (
    <StaticQuery
      query={graphql`
        query TestimonialsQuery {
          allMarkdownRemark(sort: { fields: [frontmatter___sortOrder], order: ASC }, filter: { fileAbsolutePath: { regex: "/(testimonials)/" } }) {
            edges {
              node {
                id
                frontmatter {
                  content
                  author
                  title
                  company
                }
              }
            }
          }
        }
      `}
      render={data => (
        <section className={styles.testimonials}>
          <div className="container">
            <h3>Testimonials</h3>

            <Slider {...settings} className={styles.testimonialSlider}>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <figure className="testimonial" key={node.frontmatter.author}>
                  <blockquote>{node.frontmatter.content}</blockquote>
                  <figcaption>
                    <span className={styles.testimonialauthor}>{node.frontmatter.author}</span>
                    <span className={styles.testimonialtitle}>
                      {node.frontmatter.title}
                      <br />
                      {node.frontmatter.company}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </Slider>
          </div>
        </section>
      )}
    />
  )
}

export default testimonials
