import { lazy } from 'react';

const Explorer = lazy(() =>
  import(/* webpackChunkName: "page_Explorer" */ '@/pages/Explorer')
);

const exact = true;

export default [
  {
    name: 'explorer',
    path: '/:folder*',
    component: Explorer
  }
];
