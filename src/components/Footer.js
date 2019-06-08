import React from 'react'

import { rhythm } from '../utils/typography'

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <a
          href="/rss.xml"
          target="_blank"
          rel="noopener noreferrer"
        >
          rss feed
        </a> &bull;{' '}
        <a
          href="https://twitter.com/vladpotter"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a> &bull;{' '}
        <a
          href="https://github.com/vladolaru"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a> &bull;{' '}
        <a
          href="https://www.linkedin.com/in/vladolaru/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
        <br/><small>© 2019 Vlad Olaru &bull;{' '} Made with Gatsby, hosted on Netlify</small>
      </footer>
    )
  }
}

export default Footer
