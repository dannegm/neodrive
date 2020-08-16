import React, { Children, Fragment, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import { BreadcrumbWrapper, BreadcrumbSeparator } from './Breadcrumb.styled';

const Separator = () => {
  return <BreadcrumbSeparator>/</BreadcrumbSeparator>;
};

const Breadcrumb = ({ children }) => {
  return (
    <BreadcrumbWrapper>
      {Children.map(children, (child, index) => (
        <Fragment key={uuid()}>
          {index !== 0 && <Separator />}
          {child}
        </Fragment>
      ))}
    </BreadcrumbWrapper>
  );
};

Breadcrumb.propTypes = {
  children: PropTypes.node.isRequired
};

export default Breadcrumb;
