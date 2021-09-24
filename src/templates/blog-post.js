import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { formatReadingTime } from '../utils/helpers'
import { rhythm, scale } from '../utils/typography'
import Signup from '../components/Signup'
import { getImage } from "gatsby-plugin-image"

const systemFont = `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
      `${this.props.data.site.siteMetadata.siteUrl}${post.fields.slug}`
    )}`;
    const emailUrl = `mailto:hello@thinkwritecode.com?subject=${encodeURIComponent(
      `Thoughts on ${post.frontmatter.title}`
    )}&body=${encodeURIComponent(
      `Hi Vlad,`
    )}`;
    const image = post.frontmatter.featuredImage ? getImage(post.frontmatter.featuredImage) : this.props.data.site.siteMetadata.image;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.spoiler}
          image={image}
          slug={post.fields.slug}
        />
        <main>
          <article>
            <header>
              <h1>{post.frontmatter.title}</h1>
              <p
                style={{
                  ...scale(-1/5),
                  display: `block`,
                  marginBottom: rhythm(1),
                  marginTop: rhythm(-1),
                }}
              >
                {post.frontmatter.date}
                {` • ${formatReadingTime(post.timeToRead)}`}
              </p>
            </header>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <footer>
              <p>
                <a href={discussUrl} target="_blank" rel="noopener noreferrer">
                  Discuss on Twitter
                </a>
                {` • `}
                <a href={emailUrl} target="_blank" rel="noopener noreferrer">
                  Drop me an email
                </a>
              </p>
            </footer>
          </article>
        </main>
        <aside>
          <div
            style={{
              margin: '90px 0 40px 0',
              fontFamily: systemFont,
            }}
          >
            <Signup />
          </div>
          <h3
            style={{
              fontFamily: 'Montserrat, sans-serif',
              marginTop: rhythm(0.25),
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'hsl(23.3, 99%, 60%)',
              }}
              to={'/'}
            >
              {siteTitle}
            </Link>
          </h3>
          <Bio />

          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </aside>
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
        author
        image
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        spoiler,
        featuredImage {
            childImageSharp{
              fluid(maxWidth: 720) {
                src
              }
            }
          }
      }
      fields {
        slug
      }
    }
  }
`
