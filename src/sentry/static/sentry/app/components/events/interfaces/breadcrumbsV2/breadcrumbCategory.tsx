import React from 'react';
import styled from '@emotion/styled';

type Props = {
  category?: string;
};

const BreadcrumbCategory = ({category = 'generic'}: Props) => (
  <Category title={category}>{category}</Category>
);

export default BreadcrumbCategory;

const Category = styled('div')`
  color: ${p => p.theme.gray5};
`;
