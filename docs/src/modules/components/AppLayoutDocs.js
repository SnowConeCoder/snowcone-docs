import * as React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';
import { exactProp } from '@mui/utils';
import GlobalStyles from '@mui/material/GlobalStyles';
import Head from 'docs/src/modules/components/Head';
import AppFrame from 'docs/src/modules/components/AppFrame';
import EditPage from 'docs/src/modules/components/EditPage';
import AppContainer from 'docs/src/modules/components/AppContainer';
import AppTableOfContents from 'docs/src/modules/components/AppTableOfContents';

const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'disableToc',
})(({ disableToc, theme }) => ({
  display: 'flex',
  width: '100%',
  ...(disableToc && {
    [theme.breakpoints.up('lg')]: {
      marginRight: '5%',
    },
  }),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - var(--MuiDocs-navDrawer-width))`,
  },
}));

const ActionsDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  marginTop: -10,
  marginBottom: -15,
  [theme.breakpoints.up('lg')]: {
    justifyContent: 'flex-end',
  },
}));

function AppLayoutDocs(props) {
  const router = useRouter();
  const { children, description, disableToc = false, location, title, toc } = props;

  if (description === undefined) {
    throw new Error('Missing description in the page');
  }

  const asPathWithoutLang = router.asPath.replace(/^\/[a-zA-Z]{2}\//, '/');
  let productName = 'MUI';
  if (asPathWithoutLang.startsWith('/material-ui')) {
    productName = 'Material UI';
  }
  if (asPathWithoutLang.startsWith('/base')) {
    productName = 'MUI Base';
  }
  if (asPathWithoutLang.startsWith('/x')) {
    productName = 'MUI X';
  }

  return (
    <AppFrame>
      <GlobalStyles
        styles={{
          ':root': {
            '--MuiDocs-navDrawer-width': '300px',
            '--MuiDocs-toc-width': '240px',
            '--MuiDocs-header-height': '64px',
          },
        }}
      />
      <Head title={`${title} - ${productName}`} description={description} />
      <Main disableToc={disableToc}>
        {/*
            Render the TOCs first to avoid layout shift when the HTML is streamed.
            See https://jakearchibald.com/2014/dont-use-flexbox-for-page-layout/ for more details.
          */}
        {disableToc ? null : <AppTableOfContents toc={toc} />}
        <AppContainer>
          <ActionsDiv>{location && <EditPage markdownLocation={location} />}</ActionsDiv>
          {children}
        </AppContainer>
      </Main>
    </AppFrame>
  );
}

AppLayoutDocs.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  disableToc: PropTypes.bool.isRequired,
  location: PropTypes.string,
  title: PropTypes.string.isRequired,
  toc: PropTypes.array.isRequired,
};

if (process.env.NODE_ENV !== 'production') {
  AppLayoutDocs.propTypes = exactProp(AppLayoutDocs.propTypes);
}

export default AppLayoutDocs;
