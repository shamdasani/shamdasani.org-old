import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Me from "../components/Me"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PostContainer = styled.article`
  max-width: 40em;
  line-height: 1.5;
  margin: 0 auto;

  h1 {
    font-size: 48px;
    text-align: center;
  }

  p.date {
    text-align: right;
    font-size: 18px;
  }

  section {
    font-size: 18px;
  }

  img {
    max-width: 300px;

  }


  
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <PostContainer>
            <header>
              <h1>{post.frontmatter.title}</h1>
              <p className="date">{post.frontmatter.date}</p>
            </header>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <nav>
            {previous && (
              <Link to={previous.fields.slug} className="prev" rel="prev">
                ←<b>{previous.frontmatter.title}</b>
              </Link>
            )}
            <br /> <br />
            {next && (
              <Link to={next.fields.slug} className="next" rel="next">
                <b> {next.frontmatter.title}</b> →
              </Link>
            )}
          </nav>
          </PostContainer>

          <br /> <br />
          <footer>
            <Me trimmed />
          </footer>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
