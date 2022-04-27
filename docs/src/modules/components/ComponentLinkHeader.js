import * as React from 'react';
import PropTypes from 'prop-types';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import SketchIcon from 'docs/src/modules/components/SketchIcon';
import FigmaIcon from 'docs/src/modules/components/FigmaIcon';
import AdobeXDIcon from 'docs/src/modules/components/AdobeXDIcon';
import BundleSizeIcon from 'docs/src/modules/components/BundleSizeIcon';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import W3CIcon from 'docs/src/modules/components/W3CIcon';
import MaterialDesignIcon from 'docs/src/modules/components/MaterialDesignIcon';
import { styled } from '@mui/material/styles';
import { useTranslate } from 'docs/src/modules/utils/i18n';

const Root = styled('ul')(({ theme }) => ({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  flexWrap: 'wrap',
  marginBottom: theme.spacing(2),
  '& li': {
    margin: theme.spacing(0.5),
  },
  '& .MuiChip-root .MuiChip-iconSmall': {
    marginLeft: 4,
  },
}));

export default function ComponentLinkHeader(props) {
  const {
    headers,
    headers: { packageName = '@mui/material' },
    options,
  } = props;
  const t = useTranslate();

  return null;
}

ComponentLinkHeader.propTypes = {
  headers: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
};
