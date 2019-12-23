import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Me from "../components/me"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PostsTitle = styled.p`
  font-size: 2rem;
`

const PostLink = styled(Link)`
  text-decoration: none;
  color: #333;
  transition: all 300ms ease;
  font-weight: 600;
  font-size: 1.5rem;
  &:hover {
    opacity: 0.6;
  }

  
`

const PostsList = styled.div`
article {
  margin-left: 16px;
}
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Samay Shamdasani" />
        <Me />
        <PostsTitle id="writing">
          <b>Essays</b>
        </PostsTitle>
        <PostsList>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h3>
                  <PostLink style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </PostLink>
                </h3>
              </header>
            </article>
          )
        })}
        </PostsList>
        <br/>
        <br/>
        <br/>

      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
