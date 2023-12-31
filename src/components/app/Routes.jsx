import { Route, Routes } from 'react-router-dom';

import PrivateRoute from './PrivateRoutes/PrivateRotes';
import PublicRoute from './PublicRoutes/PublicRoutes';
import { LoaderSpinner } from 'components/Loader/Loader';
import { Suspense, lazy } from 'react';
import HomePage from 'Page/Home Page/HomePage';
import { RedirectTo } from './RedirectTo/RedirectTo';

const LoginPage = lazy(() => import('../../Page/LogInPage'));
const RegisterPage = lazy(() => import('../../Page/RegistrationPage'));
const NotPage = lazy(() => import('../../Page/NotPage'));

const DashboardPage = lazy(() => import('../../Page/DashboardPage'));
const CurrencyPage = lazy(() => import('../../Page/CurrencyPage'));
const SummaryPage = lazy(() => import('../../Page/SummaryPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<LoaderSpinner />}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route element={<DashboardPage />}>
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/statistic"
            element={
              <PrivateRoute>
                <SummaryPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/currency"
            element={
              <RedirectTo
                component={
                  <PrivateRoute>
                    <CurrencyPage />
                  </PrivateRoute>
                }
                redirectTo="/home"
              />
            }
          />
        </Route>

        <Route path="*" element={<NotPage />} />
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
