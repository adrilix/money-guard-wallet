import { Route, Routes } from 'react-router-dom';
// import { Suspense, lazy } from 'react';
import LoginPage from '../../Page/LogInPage';
import RegisterPage from '../../Page/RegistrationPage';
import CurrencyPage from 'Page/CurrencyPage/CurrencyPage';

import DashboardPage from 'Page/DashboardPage/DashboardPage';
import NotPage from 'Page/NotPage/NotPage';

import PrivateRoute from './PrivateRoutes/PrivateRotes';
import PublicRoute from './PublicRoutes/PublicRoutes';
import { LoaderSpinner } from 'components/Loader/Loader';
import { Suspense, lazy } from 'react';
import SummaryPage from 'Page/SummaryPage/SummaryPage';

// const LoginPage = lazy(() => import('../../Page/LogInPage'));
// const RegisterPage = lazy(() =>
//   import('../../Page/RegistrationPage')
// );
// const NotPage = lazy(() => import('Page/NotPage/NotPage'));

// const DashboardPage = lazy(() => import('Page/DashboardPage/DashboardPage'));

const UserRoutes = () => {
  return (
    // <Suspense fallback={LoaderSpinner}>
    <Routes>
      <Route path="*" element={<NotPage />} />
      <Route element={<PublicRoute />}>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      </Route> 
      <Route element={<PrivateRoute />}>
      <Route path="/home" element={<DashboardPage />} />
      <Route path="/currency" element={<CurrencyPage />} />
       <Route path="/statistic" element={<SummaryPage />} />
      </Route> 
    </Routes>
    // </Suspense>
  );
};
export default UserRoutes;