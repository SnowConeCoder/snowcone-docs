import pagesApi from './pagesApi';

export interface MuiPage {
  pathname: string;
  children?: MuiPage[];
  disableDrawer?: boolean;
  icon?: string;
  /**
   * Indicates if the pages are regarding some legacy API.
   */
  legacy?: boolean;
  /**
   * In case the children have pathnames out of pathname value, use this field to scope other pathnames
   */
  scopePathnames?: string[];
  /**
   * Pages are considered to be ordered depth-first.
   * If a page should be excluded from this order, set `order: false`.
   * You want to set `ordered: false` if you don't want the page to appear in an ordered list e.g. for previous/next page navigation.
   */
  ordered?: boolean;
  /**
   * Props spread to the Link component
   */
  linkProps?: Record<string, unknown>;
  subheader?: string;
  /**
   * Overrides the default page title.
   */
  title?: string;
}

export interface OrderedMuiPage extends MuiPage {
  ordered?: true;
}

const pages: readonly MuiPage[] = [
  {
    pathname: '/getting-started',
    icon: 'DescriptionIcon',
    children: [
      { pathname: '/getting-started/installation' },
    ],
  },
  {
    pathname: '/components',
    icon: 'ToggleOnIcon',
    children: [
      {
        pathname: '/components',
        subheader: '/components/inputs',
        children: [
          { pathname: '/components/autocomplete' },
        ],
      },
    ],
  },
];

export default pages;
