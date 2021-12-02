import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Hero showPerson />
      <Posts />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          author
          category
          readTime
          slug
          date(formatString: "MMMM, Do YYYY")
          image {
            childrenImageSharp {
              gatsbyImageData
            }
          }
        }
        excerpt
      }
    }
  }
`

export default IndexPage
