import { Route, Routes } from 'react-router-dom';
// import { Suspense, lazy } from 'react';
// import LoginPage from '../../Page/LogInPage';
// import RegisterPage from '../../Page/RegistrationPage';
// import CurrencyPage from 'Page/CurrencyPage/CurrencyPage';

// import DashboardPage from 'Page/DashboardPage/DashboardPage';
// import NotPage from 'Page/NotPage/NotPage';
// import SummaryPage from 'Page/SummaryPage/SummaryPage';
import PrivateRoute from './PrivateRoutes/PrivateRotes';
import PublicRoute from './PublicRoutes/PublicRoutes';
import { LoaderSpinner } from 'components/Loader/Loader';
import { Suspense, lazy } from 'react';
import HomePage from 'Page/Home Page/HomePage';
import { useMediaQuery } from 'react-responsive';

const LoginPage = lazy(() => import('../../Page/LogInPage'));
const RegisterPage = lazy(() => import('../../Page/RegistrationPage'));
const NotPage = lazy(() => import('../../Page/NotPage'));

const DashboardPage = lazy(() => import('../../Page/DashboardPage'));
const CurrencyPage = lazy(() => import('../../Page/CurrencyPage'));
const SummaryPage = lazy(() => import('../../Page/SummaryPage'));

const UserRoutes = () => {
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 767 });
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
          {isMobile && (
            <Route
              path="/currency"
              element={
                <PrivateRoute>
                  <CurrencyPage />
                </PrivateRoute>
              }
            />
          )}
        </Route>

        <Route path="*" element={<NotPage />} />
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
