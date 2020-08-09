import React from 'react';
import PropTypes from 'prop-types';

import { ItemWrapper, ItemIcon, ItemText } from './Item.styled';

const Item = ({ label, icon, current, onClick }) => {
  return (
    <ItemWrapper current={current} onClick={onClick}>
      {icon && <ItemIcon>{icon}</ItemIcon>}
      <ItemText>{label}</ItemText>
    </ItemWrapper>
  );
};

Item.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.node,
  current: PropTypes.bool,
  onClick: PropTypes.func
};

Item.defaultProps = {
  label: '',
  icon: null,
  current: false,
  onClick: () => null
};

export default Item;
