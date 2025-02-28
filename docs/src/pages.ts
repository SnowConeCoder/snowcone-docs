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
      { pathname: '/getting-started/usage' },
      { pathname: '/getting-started/example-projects' },
      { pathname: '/getting-started/templates' },
      { pathname: '/getting-started/learn' },
      { pathname: '/getting-started/faq', title: 'FAQs' },
      { pathname: '/getting-started/supported-components' },
      { pathname: '/getting-started/supported-platforms' },
      { pathname: '/getting-started/support' },
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
          { pathname: '/components/buttons', title: 'Button' },
          { pathname: '/components/button-group' },
          { pathname: '/components/checkboxes', title: 'Checkbox' },
          { pathname: '/components/floating-action-button' },
          { pathname: '/components/radio-buttons', title: 'Radio button' },
          { pathname: '/components/rating' },
          { pathname: '/components/selects', title: 'Select' },
          { pathname: '/components/slider' },
          { pathname: '/components/switches', title: 'Switch' },
          { pathname: '/components/text-fields', title: 'Text field' },
          { pathname: '/components/transfer-list' },
          { pathname: '/components/toggle-button' },
        ],
      },
      {
        pathname: '/components',
        subheader: '/components/data-display',
        children: [
          { pathname: '/components/avatars', title: 'Avatar' },
          { pathname: '/components/badges', title: 'Badge' },
          { pathname: '/components/chips', title: 'Chip' },
          { pathname: '/components/dividers', title: 'Divider' },
          { pathname: '/components/icons' },
          { pathname: '/components/material-icons' },
          { pathname: '/components/lists', title: 'List' },
          { pathname: '/components/tables', title: 'Table' },
          { pathname: '/components/tooltips', title: 'Tooltip' },
          { pathname: '/components/typography' },
        ],
      },
      {
        pathname: '/components',
        subheader: '/components/feedback',
        children: [
          { pathname: '/components/alert' },
          { pathname: '/components/backdrop' },
          { pathname: '/components/dialogs' },
          { pathname: '/components/progress' },
          { pathname: '/components/skeleton' },
          { pathname: '/components/snackbars', title: 'Snackbar' },
        ],
      },
      {
        pathname: '/components',
        subheader: '/components/surfaces',
        children: [
          { pathname: '/components/accordion' },
          { pathname: '/components/app-bar' },
          { pathname: '/components/cards', title: 'Card' },
          { pathname: '/components/paper' },
        ],
      },
      {
        pathname: '/components',
        subheader: '/components/navigation',
        children: [
          { pathname: '/components/bottom-navigation' },
          { pathname: '/components/breadcrumbs' },
          { pathname: '/components/drawers', title: 'Drawer' },
          { pathname: '/components/links', title: 'Link' },
          { pathname: '/components/menus', title: 'Menu' },
          { pathname: '/components/pagination' },
          { pathname: '/components/speed-dial' },
          { pathname: '/components/steppers', title: 'Stepper' },
          { pathname: '/components/tabs' },
        ],
      },
      {
        pathname: '/components',
        subheader: '/components/layout',
        children: [
          { pathname: '/components/box' },
          { pathname: '/components/container' },
          { pathname: '/components/grid' },
          { pathname: '/components/stack' },
          { pathname: '/components/image-list' },
          { pathname: '/components/hidden' },
        ],
      },
      {
        pathname: '/components',
        subheader: '/components/utils',
        children: [
          { pathname: '/components/click-away-listener' },
          { pathname: '/components/css-baseline', title: 'CSS Baseline' },
          { pathname: '/components/modal' },
          { pathname: '/components/no-ssr', title: 'No SSR' },
          { pathname: '/components/popover' },
          { pathname: '/components/popper' },
          { pathname: '/components/portal' },
          { pathname: '/components/textarea-autosize' },
          { pathname: '/components/transitions' },
          { pathname: '/components/use-media-query', title: 'useMediaQuery' },
        ],
      },
      {
        pathname: '/components',
        subheader: '/components/data-grid',
        children: [
          {
            pathname: '/components/data-grid',
            subheader: '/components/data-grid/overview',
            title: 'Overview',
          },
          { pathname: '/components/data-grid/demo' },
          { pathname: '/components/data-grid/getting-started' },
          { pathname: '/components/data-grid/layout' },
          { pathname: '/components/data-grid/columns' },
          { pathname: '/components/data-grid/rows' },
          { pathname: '/components/data-grid/editing' },
          { pathname: '/components/data-grid/sorting' },
          { pathname: '/components/data-grid/filtering' },
          { pathname: '/components/data-grid/pagination' },
          { pathname: '/components/data-grid/selection' },
          { pathname: '/components/data-grid/events' },
          { pathname: '/components/data-grid/export' },
          { pathname: '/components/data-grid/components' },
          { pathname: '/components/data-grid/style' },
          { pathname: '/components/data-grid/localization' },
          { pathname: '/components/data-grid/virtualization' },
          { pathname: '/components/data-grid/accessibility' },
          { pathname: '/components/data-grid/group-pivot', title: 'Group & Pivot' },
        ],
      },
      {
        pathname: '/components',
        subheader: '/components/lab',
        children: [
          { pathname: '/components/about-the-lab', title: 'About the lab 🧪' },
          {
            pathname: '/components',
            subheader: '/components/lab-pickers',
            title: 'Date / Time',
            children: [
              { pathname: '/components/pickers', title: 'Introduction' },
              { pathname: '/components/date-picker' },
              { pathname: '/components/date-range-picker', title: 'Date Range Picker ⚡️' },
              { pathname: '/components/date-time-picker' },
              { pathname: '/components/time-picker' },
            ],
          },
          { pathname: '/components/masonry' },
          { pathname: '/components/timeline' },
          { pathname: '/components/trap-focus' },
          { pathname: '/components/tree-view' },
        ],
      },
    ],
  },
  {
    title: 'Component API',
    pathname: '/api-docs',
    icon: 'CodeIcon',
    children: [
      ...pagesApi,
      {
        pathname: '/api-docs/data-grid',
        title: 'Data Grid',
        children: [
          { pathname: '/api-docs/data-grid', title: 'API Reference' },
          { pathname: '/api-docs/data-grid/data-grid', title: 'DataGrid' },
          { pathname: '/api-docs/data-grid/data-grid-pro', title: 'DataGridPro' },
          { pathname: '/api-docs/data-grid/grid-api', title: 'GridApi' },
          { pathname: '/api-docs/data-grid/grid-col-def', title: 'GridColDef' },
          { pathname: '/api-docs/data-grid/grid-cell-params', title: 'GridCellParams' },
          { pathname: '/api-docs/data-grid/grid-row-params', title: 'GridRowParams' },
          {
            pathname: '/api-docs/data-grid/grid-csv-export-options',
            title: 'GridCSVExportOptions',
          },
          {
            pathname: '/api-docs/data-grid/grid-print-export-options',
            title: 'GridPrintExportOptions',
          },
        ].map((page) => {
          return {
            ...page,
            linkProps: { linkAs: `${page.pathname.replace(/^\/api-docs/, '/api')}/` },
          };
        }),
      },
    ]
      .sort((a, b) =>
        a.pathname.replace('/api-docs/', '').localeCompare(b.pathname.replace('/api-docs/', '')),
      )
      .map((page) => {
        return {
          ...page,
          linkProps: { linkAs: `${page.pathname.replace(/^\/api-docs/, '/api')}/` },
        };
      }),
  }
];

export default pages;
