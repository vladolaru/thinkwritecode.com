import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import {getSrc} from 'gatsby-plugin-image'

function SEO({ meta, image, title, description, slug }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const { siteMetadata } = data.site
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaImage = image ? `${siteMetadata.siteUrl}${getSrc(image)}` : null
        const url = `${siteMetadata.siteUrl}${slug}`
        return (
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            {...(title
              ? {
                titleTemplate: `%s - ${siteMetadata.title}`,
                title,
              }
              : {
                title: siteMetadata.title,
              })}
            meta={[
              {
                name: 'description',
                content: metaDescription,
              },
              {
                property: 'og:url',
                content: url,
              },
              {
                property: 'og:title',
                content: title || siteMetadata.title,
              },
              {
                name: 'og:description',
                content: metaDescription,
              },
              {
                name: 'twitter:card',
                content: 'summary',
              },
              {
                name: 'twitter:creator',
                content: siteMetadata.social.twitter,
              },
              {
                name: 'twitter:title',
                content: title || siteMetadata.title,
              },
              {
                name: 'twitter:description',
                content: metaDescription,
              },
              {
                name: "google-site-verification",
                content:"Qb2dqJXq8WyhIXNc4lX8A642x338okF_q-CRIvLUR50",
              },
            ]
              .concat(
                metaImage
                  ? [
                    {
                      property: 'og:image',
                      content: metaImage,
                    },
                    {
                      name: 'twitter:image',
                      content: metaImage,
                    },
                  ]
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  meta: [],
  title: '',
  slug: '',
}

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.object,
  meta: PropTypes.array,
  slug: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
        social {
          twitter
        }
      }
    }
  }
`
