import * as React from 'react';
import { DistributiveOmit } from '@mui/types';
import { StyledComponentProps } from '@mui/material/src/styles';

export { StyledComponentProps };

/**
 * All standard components exposed by `material-ui` are `StyledComponents` with
 * certain `classes`, on which one can also set a top-level `className` and inline
 * `style`.
 * @deprecated will be removed in v5 for internal usage only
 */
export type StandardProps<
  C,
  ClassKey extends string,
  Removals extends keyof C = never,
> = DistributiveOmit<C, 'classes' | Removals> &
  StyledComponentProps<ClassKey> & {
    className?: string;
    ref?: C extends { ref?: infer RefType } ? RefType : React.Ref<unknown>;
    style?: React.CSSProperties;
  };

/**
 * @internal
 * ONLY USE FROM WITHIN mui/material-ui
 *
 * Internal helper type for conform (describeConformance) components
 * However, we don't declare classes on this type.
 * It is recommended to declare them manually with an interface so that each class can have a separate JSDoc.
 */
export type InternalStandardProps<C, Removals extends keyof C = never> = DistributiveOmit<
  C,
  'classes' | Removals
> &
  // each component declares it's classes in a separate interface for proper JSDoc
  StyledComponentProps<never> & {
    ref?: C extends { ref?: infer RefType } ? RefType : React.Ref<unknown>;
    // TODO: Remove implicit props. Up to each component.
    className?: string;
    style?: React.CSSProperties;
  };

export type PaletteMode = 'light' | 'dark';
export interface Color {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
}

export namespace PropTypes {
  // keeping the type structure for backwards compat
  // eslint-disable-next-line @typescript-eslint/no-shadow, @typescript-eslint/no-unused-vars
  type Color = 'inherit' | 'primary' | 'secondary' | 'default';
}

// From index.js
// eslint-disable-next-line import/first
import * as colors from '@mui/material/src/colors';

export { colors };
export * from '@mui/material/src/styles';

export * from '@mui/material/src/utils';

export { default as Accordion } from '@mui/material/src/Accordion';
export * from '@mui/material/src/Accordion';

export { default as AccordionActions } from '@mui/material/src/AccordionActions';
export * from '@mui/material/src/AccordionActions';

export { default as AccordionDetails } from '@mui/material/src/AccordionDetails';
export * from '@mui/material/src/AccordionDetails';

export { default as AccordionSummary } from '@mui/material/src/AccordionSummary';
export * from '@mui/material/src/AccordionSummary';

export { default as Alert } from '@mui/material/src/Alert';
export * from '@mui/material/src/Alert';

export { default as AlertTitle } from '@mui/material/src/AlertTitle';
export * from '@mui/material/src/AlertTitle';

export { default as AppBar } from '@mui/material/src/AppBar';
export * from '@mui/material/src/AppBar';

export { default as Autocomplete } from '@mui/material/src/Autocomplete';
export * from '@mui/material/src/Autocomplete';

export { default as Avatar } from '@mui/material/src/Avatar';
export * from '@mui/material/src/Avatar';

export { default as AvatarGroup } from '@mui/material/src/AvatarGroup';
export * from '@mui/material/src/AvatarGroup';

export { default as Backdrop } from '@mui/material/src/Backdrop';
export * from '@mui/material/src/Backdrop';

export { default as Badge } from '@mui/material/src/Badge';
export * from '@mui/material/src/Badge';

export { default as BottomNavigation } from '@mui/material/src/BottomNavigation';
export * from '@mui/material/src/BottomNavigation';

export { default as BottomNavigationAction } from '@mui/material/src/BottomNavigationAction';
export * from '@mui/material/src/BottomNavigationAction';

export { default as Box } from '@mui/material/src/Box';
export * from '@mui/material/src/Box';

export { default as Breadcrumbs } from '@mui/material/src/Breadcrumbs';
export * from '@mui/material/src/Breadcrumbs';

export { default as Button } from '@mui/material/src/Button';
export * from '@mui/material/src/Button';

export { default as ButtonBase } from '@mui/material/src/ButtonBase';
export * from '@mui/material/src/ButtonBase';

export { default as ButtonGroup } from '@mui/material/src/ButtonGroup';
export * from '@mui/material/src/ButtonGroup';

export { default as Card } from '@mui/material/src/Card';
export * from '@mui/material/src/Card';

export { default as CardActionArea } from '@mui/material/src/CardActionArea';
export * from '@mui/material/src/CardActionArea';

export { default as CardActions } from '@mui/material/src/CardActions';
export * from '@mui/material/src/CardActions';

export { default as CardContent } from '@mui/material/src/CardContent';
export * from '@mui/material/src/CardContent';

export { default as CardHeader } from '@mui/material/src/CardHeader';
export * from '@mui/material/src/CardHeader';

export { default as CardMedia } from '@mui/material/src/CardMedia';
export * from '@mui/material/src/CardMedia';

export { default as Checkbox } from '@mui/material/src/Checkbox';
export * from '@mui/material/src/Checkbox';

export { default as Chip } from '@mui/material/src/Chip';
export * from '@mui/material/src/Chip';

export { default as CircularProgress } from '@mui/material/src/CircularProgress';
export * from '@mui/material/src/CircularProgress';

export { default as ClickAwayListener } from '@mui/material/src/ClickAwayListener';
export * from '@mui/material/src/ClickAwayListener';

export { default as Collapse } from '@mui/material/src/Collapse';
export * from '@mui/material/src/Collapse';

export { default as Container } from '@mui/material/src/Container';
export * from '@mui/material/src/Container';

export { default as CssBaseline } from '@mui/material/src/CssBaseline';
export * from '@mui/material/src/CssBaseline';

/**
 * @deprecated use color-scheme in CssBaseline or ScopedCssBaseline to modify scrollbar color
 */
export { default as darkScrollbar } from '@mui/material/src/darkScrollbar';
export * from '@mui/material/src/darkScrollbar';

export { default as Dialog } from '@mui/material/src/Dialog';
export * from '@mui/material/src/Dialog';

export { default as DialogActions } from '@mui/material/src/DialogActions';
export * from '@mui/material/src/DialogActions';

export { default as DialogContent } from '@mui/material/src/DialogContent';
export * from '@mui/material/src/DialogContent';

export { default as DialogContentText } from '@mui/material/src/DialogContentText';
export * from '@mui/material/src/DialogContentText';

export { default as DialogTitle } from '@mui/material/src/DialogTitle';
export * from '@mui/material/src/DialogTitle';

export { default as Divider } from '@mui/material/src/Divider';
export * from '@mui/material/src/Divider';

export { default as Drawer } from '@mui/material/src/Drawer';
export * from '@mui/material/src/Drawer';

export { default as Fab } from '@mui/material/src/Fab';
export * from '@mui/material/src/Fab';

export { default as Fade } from '@mui/material/src/Fade';
export * from '@mui/material/src/Fade';

export { default as FilledInput } from '@mui/material/src/FilledInput';
export * from '@mui/material/src/FilledInput';

export { default as FormControl } from '@mui/material/src/FormControl';
export * from '@mui/material/src/FormControl';

export { default as FormControlLabel } from '@mui/material/src/FormControlLabel';
export * from '@mui/material/src/FormControlLabel';

export { default as FormGroup } from '@mui/material/src/FormGroup';
export * from '@mui/material/src/FormGroup';

export { default as FormHelperText } from '@mui/material/src/FormHelperText';
export * from '@mui/material/src/FormHelperText';

export { default as FormLabel } from '@mui/material/src/FormLabel';
export * from '@mui/material/src/FormLabel';

export { default as Grid } from '@mui/material/src/Grid';
export * from '@mui/material/src/Grid';

export { default as Grow } from '@mui/material/src/Grow';
export * from '@mui/material/src/Grow';

export { default as Hidden } from '@mui/material/src/Hidden';
export * from '@mui/material/src/Hidden';

export { default as Icon } from '@mui/material/src/Icon';
export * from '@mui/material/src/Icon';

export { default as IconButton } from '@mui/material/src/IconButton';
export * from '@mui/material/src/IconButton';

export { default as ImageList } from '@mui/material/src/ImageList';
export * from '@mui/material/src/ImageList';

export { default as ImageListItem } from '@mui/material/src/ImageListItem';
export * from '@mui/material/src/ImageListItem';

export { default as ImageListItemBar } from '@mui/material/src/ImageListItemBar';
export * from '@mui/material/src/ImageListItemBar';

export { default as Input } from '@mui/material/src/Input';
export * from '@mui/material/src/Input';

export { default as InputAdornment } from '@mui/material/src/InputAdornment';
export * from '@mui/material/src/InputAdornment';

export { default as InputBase } from '@mui/material/src/InputBase';
export * from '@mui/material/src/InputBase';

export { default as InputLabel } from '@mui/material/src/InputLabel';
export * from '@mui/material/src/InputLabel';

export { default as LinearProgress } from '@mui/material/src/LinearProgress';
export * from '@mui/material/src/LinearProgress';

export { default as Link } from '@mui/material/src/Link';
export * from '@mui/material/src/Link';

export { default as List } from '@mui/material/src/List';
export * from '@mui/material/src/List';

export { default as ListItem } from '@mui/material/src/ListItem';
export * from '@mui/material/src/ListItem';

export { default as ListItemAvatar } from '@mui/material/src/ListItemAvatar';
export * from '@mui/material/src/ListItemAvatar';

export { default as ListItemButton } from '@mui/material/src/ListItemButton';
export * from '@mui/material/src/ListItemButton';

export { default as ListItemIcon } from '@mui/material/src/ListItemIcon';
export * from '@mui/material/src/ListItemIcon';

export { default as ListItemSecondaryAction } from '@mui/material/src/ListItemSecondaryAction';
export * from '@mui/material/src/ListItemSecondaryAction';

export { default as ListItemText } from '@mui/material/src/ListItemText';
export * from '@mui/material/src/ListItemText';

export { default as ListSubheader } from '@mui/material/src/ListSubheader';
export * from '@mui/material/src/ListSubheader';

export { default as Menu } from '@mui/material/src/Menu';
export * from '@mui/material/src/Menu';

export { default as MenuItem } from '@mui/material/src/MenuItem';
export * from '@mui/material/src/MenuItem';

export { default as MenuList } from '@mui/material/src/MenuList';
export * from '@mui/material/src/MenuList';

export { default as MobileStepper } from '@mui/material/src/MobileStepper';
export * from '@mui/material/src/MobileStepper';

export { default as Modal } from '@mui/material/src/Modal';
export * from '@mui/material/src/Modal';

export { default as NativeSelect } from '@mui/material/src/NativeSelect';
export * from '@mui/material/src/NativeSelect';

export { default as NoSsr } from '@mui/material/src/NoSsr';
export * from '@mui/material/src/NoSsr';

export { default as OutlinedInput } from '@mui/material/src/OutlinedInput';
export * from '@mui/material/src/OutlinedInput';

export { default as Pagination } from '@mui/material/src/Pagination';
export * from '@mui/material/src/Pagination';

export { default as PaginationItem } from '@mui/material/src/PaginationItem';
export * from '@mui/material/src/PaginationItem';

export { default as Paper } from '@mui/material/src/Paper';
export * from '@mui/material/src/Paper';

export { default as Popover } from '@mui/material/src/Popover';
export * from '@mui/material/src/Popover';

export { default as Popper } from '@mui/material/src/Popper';
export * from '@mui/material/src/Popper';

export { default as Portal } from '@mui/material/src/Portal';
export * from '@mui/material/src/Portal';

export { default as Radio } from '@mui/material/src/Radio';
export * from '@mui/material/src/Radio';

export { default as RadioGroup } from '@mui/material/src/RadioGroup';
export * from '@mui/material/src/RadioGroup';

export { default as Rating } from '@mui/material/src/Rating';
export * from '@mui/material/src/Rating';

export { default as ScopedCssBaseline } from '@mui/material/src/ScopedCssBaseline';
export * from '@mui/material/src/ScopedCssBaseline';

export { default as Select } from '@mui/material/src/Select';
export * from '@mui/material/src/Select';

export { default as Skeleton } from '@mui/material/src/Skeleton';
export * from '@mui/material/src/Skeleton';

export { default as Slide } from '@mui/material/src/Slide';
export * from '@mui/material/src/Slide';

export { default as Slider } from '@mui/material/src/Slider';
export * from '@mui/material/src/Slider';

export { default as Snackbar } from '@mui/material/src/Snackbar';
export * from '@mui/material/src/Snackbar';

export { default as SnackbarContent } from '@mui/material/src/SnackbarContent';
export * from '@mui/material/src/SnackbarContent';

export { default as SpeedDial } from '@mui/material/src/SpeedDial';
export * from '@mui/material/src/SpeedDial';

export { default as SpeedDialAction } from '@mui/material/src/SpeedDialAction';
export * from '@mui/material/src/SpeedDialAction';

export { default as SpeedDialIcon } from '@mui/material/src/SpeedDialIcon';
export * from '@mui/material/src/SpeedDialIcon';

export { default as Stack } from '@mui/material/src/Stack';
export * from '@mui/material/src/Stack';

export { default as Step } from '@mui/material/src/Step';
export * from '@mui/material/src/Step';

export { default as StepButton } from '@mui/material/src/StepButton';
export * from '@mui/material/src/StepButton';

export { default as StepConnector } from '@mui/material/src/StepConnector';
export * from '@mui/material/src/StepConnector';

export { default as StepContent } from '@mui/material/src/StepContent';
export * from '@mui/material/src/StepContent';

export { default as StepIcon } from '@mui/material/src/StepIcon';
export * from '@mui/material/src/StepIcon';

export { default as StepLabel } from '@mui/material/src/StepLabel';
export * from '@mui/material/src/StepLabel';

export { default as Stepper } from '@mui/material/src/Stepper';
export * from '@mui/material/src/Stepper';

export { default as SvgIcon } from '@mui/material/src/SvgIcon';
export * from '@mui/material/src/SvgIcon';

export { default as SwipeableDrawer } from '@mui/material/src/SwipeableDrawer';
export * from '@mui/material/src/SwipeableDrawer';

export { default as Switch } from '@mui/material/src/Switch';
export * from '@mui/material/src/Switch';

export { default as Tab } from '@mui/material/src/Tab';
export * from '@mui/material/src/Tab';

export { default as Table } from '@mui/material/src/Table';
export * from '@mui/material/src/Table';

export { default as TableBody } from '@mui/material/src/TableBody';
export * from '@mui/material/src/TableBody';

export { default as TableCell } from '@mui/material/src/TableCell';
export * from '@mui/material/src/TableCell';

export { default as TableContainer } from '@mui/material/src/TableContainer';
export * from '@mui/material/src/TableContainer';

export { default as TableFooter } from '@mui/material/src/TableFooter';
export * from '@mui/material/src/TableFooter';

export { default as TableHead } from '@mui/material/src/TableHead';
export * from '@mui/material/src/TableHead';

export { default as TablePagination } from '@mui/material/src/TablePagination';
export * from '@mui/material/src/TablePagination';

export { default as TableRow } from '@mui/material/src/TableRow';
export * from '@mui/material/src/TableRow';

export { default as TableSortLabel } from '@mui/material/src/TableSortLabel';
export * from '@mui/material/src/TableSortLabel';

export { default as Tabs } from '@mui/material/src/Tabs';
export * from '@mui/material/src/Tabs';

export { default as TabScrollButton } from '@mui/material/src/TabScrollButton';
export * from '@mui/material/src/TabScrollButton';

export { default as TextField } from '@mui/material/src/TextField';
export * from '@mui/material/src/TextField';

export { default as TextareaAutosize } from '@mui/material/src/TextareaAutosize';
export * from '@mui/material/src/TextareaAutosize';

export { default as ToggleButton } from '@mui/material/src/ToggleButton';
export * from '@mui/material/src/ToggleButton';

export { default as ToggleButtonGroup } from '@mui/material/src/ToggleButtonGroup';
export * from '@mui/material/src/ToggleButtonGroup';

export { default as Toolbar } from '@mui/material/src/Toolbar';
export * from '@mui/material/src/Toolbar';

export { default as Tooltip } from '@mui/material/src/Tooltip';
export * from '@mui/material/src/Tooltip';

export { default as Typography } from '@mui/material/src/Typography';
export * from '@mui/material/src/Typography';

export { default as useMediaQuery } from '@mui/material/src/useMediaQuery';
export * from '@mui/material/src/useMediaQuery';

export { default as useScrollTrigger } from '@mui/material/src/useScrollTrigger';
export * from '@mui/material/src/useScrollTrigger';

export { default as Zoom } from '@mui/material/src/Zoom';
export * from '@mui/material/src/Zoom';

export { default as useAutocomplete } from '@mui/material/src/useAutocomplete';
export * from '@mui/material/src/useAutocomplete';

export { default as GlobalStyles } from '@mui/material/src/GlobalStyles';
export * from '@mui/material/src/GlobalStyles';

/**
 * @deprecated will be removed in v5.beta, please use StyledEngineProvider from @mui/material/styles instead
 */
export { StyledEngineProvider } from '@mui/material/src/styles';

export { default as unstable_composeClasses } from '@mui/base/composeClasses';

export { default as generateUtilityClass } from '@mui/base/generateUtilityClass';
export * from '@mui/base/generateUtilityClass';

export { default as generateUtilityClasses } from '@mui/base/generateUtilityClasses';
