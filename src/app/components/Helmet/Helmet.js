import React from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';

const Head = ({ title, content, location }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={content} />
      <script type="application/ld+json">
        {`
        {
          "@context": "http://schema.org",
          "@type": "CreativeWork",
          "@url": "http://ingus.info${location.pathname}",
          "@logo": "http://ingus.info/img/meta/favicon.png"
        }
      `}
      </script>
    </Helmet>
  );
};

export default withRouter(Head);
