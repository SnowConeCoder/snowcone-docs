import * as React from 'react';
import Head from 'docs/src/modules/components/Head';
import AppHeader from 'docs/src/layouts/AppHeader';
import Hero from 'docs/src/components/home/Hero';
import Page from 'docs/src/components/installation';

export default function Home() {
  return (
    <React.Fragment>
      <Head title="SnowCone" description="SnowCone" />
      <AppHeader />
      <main>
        <Page />
      </main>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MUI",
  "url": "https://mui.com/",
  "logo": "https://mui.com/static/logo.png",
  "sameAs": [
    "https://twitter.com/MUI_hq",
    "https://github.com/mui/",
    "https://opencollective.com/mui"
  ]
}
          `,
        }}
      />
    </React.Fragment>
  );
}
