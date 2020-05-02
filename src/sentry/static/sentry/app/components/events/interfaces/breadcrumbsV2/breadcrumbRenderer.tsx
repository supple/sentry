import React from 'react';

import {t} from 'app/locale';

import {Breadcrumb} from '../breadcrumbs/types';
import BreadcrumbCategory from './breadcrumbCategory';
import BreadcrumbLevel from './breadcrumbLevel';

type Props = {
  breadcrumb: Breadcrumb;
};

const BreadcrumbRenderer = ({breadcrumb: {category, level}}: Props) => {
  return (
    <div>
      <div>
        {t('Category:')}
        <BreadcrumbCategory category={category} />
      </div>
      <div>
        {t('Level:')}
        <BreadcrumbLevel level={level} />
      </div>
    </div>
  );
};

export default BreadcrumbRenderer;
