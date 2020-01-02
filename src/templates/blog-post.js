import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Me from "../components/me"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ViewCounter from "../components/ViewCounter"

const PostContainer = styled.article`
  max-width: 40em;
  line-height: 1.5;
  margin: 0 auto;
  color: #333;

  h1 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 0;
  }

  .center {
    text-align: center;
    font-size: 1.5rem;
    color: #626262;
    margin-top: 0;
  }

  .date {
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 0px;
    font-weight: bold;
  }

  .views {
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 0px;
    font-weight: bold;
  }

  .stat {
    text-align: center;
    font-size: 1.5rem;
    span {
      font-weight: 600;
    }
  }

  .small {
    text-align: center;
    font-size: 1.1rem;
    color: #626262;
    margin-top: 0;
  }


  .inline {
    display: flex;
    justify-content: space-between;
  }

  .tc {
    text-align: center;
  }

  section {
    font-size: 18px;
  }

  img {
    max-width: 300px;
  }

  a {
    color: rgb(47, 128, 237);
    border-bottom: 1px solid rgb(211, 211, 211);
    transition: all 300ms ease 0s;

    &:hover {
      border-bottom: none;
    }
  }


`
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    const id = this.props.location.pathname.substring(
      1,
      this.props.location.pathname.length - 1
    )

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={`${post.frontmatter.title} | Samay Shamdasani`}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <PostContainer>
            <header>
              <h1>{post.frontmatter.title}</h1>
              <p className="center">{post.frontmatter.description}</p>
              <div className="inline">
                <p className="date">{post.frontmatter.date}</p>
                <p className="views">
                  <ViewCounter id={id} />
                </p>
              </div>
            </header>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
            <nav>
              {previous && (
                <Link to={previous.fields.slug} className="prev" rel="prev">
                  ← <b>{previous.frontmatter.title}</b>
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
