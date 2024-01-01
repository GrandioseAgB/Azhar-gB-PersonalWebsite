import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const CurriculumVitaePage = lazy(() => import('src/pages/curriculumVitae'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));


// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'curriculumVitae', element: <CurriculumVitaePage /> },
        
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      // commented by Agb path: '404',
      path: 'resume1',
      element: <Page404 />,
    },
    {
      path: '*',
      // commented by Agb element: <Navigate to="/404" replace />,
      element: <Navigate to="/blog/" replace />,
    },
  ]);

  return routes;
}
