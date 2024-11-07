import React from "react";
import { Helmet } from "react-helmet";

function SEO({ title, description, image }) {
  return (
    <Helmet>
      <title>{`${title} ${description}`}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}

export default SEO;
