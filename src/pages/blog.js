import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
// ...GatsbyImageSharpFluid

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Blog = ({
  data:{
    allStrapiBlogs:{nodes:blogs},
  },
}) => {
  return <Layout>
    <SEO title="Home" description="This is Ralph's home page"/>
    <section className="blog-page">
      <Blogs blogs={blogs} title="blogs"/>
    </section>
  </Layout>
}

export default Blog
