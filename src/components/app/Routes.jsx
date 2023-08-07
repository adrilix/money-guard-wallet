import { Route, Routes } from 'react-router-dom';
// import { Suspense, lazy } from 'react';
import LoginPage from '../../Page/LogInPage';
import RegisterPage from '../../Page/RegistrationPage';
// import DashboardPage from 'Page/DashboardPage/DashboardPage';
import CurrencyPage from 'Page/CurrencyPage/CurrencyPage';

import DashboardPage from 'Page/DashboardPage/DashboardPage';
import NotPage from 'Page/NotPage/NotPage';
import SummaryPage from 'Page/SummaryPage/SummaryPage';

// const LoginPages = lazy(() => import('../pages/Loginregistrpages/LoginPage'));
// const RegisterPages = lazy(() =>
//   import('../pages/Loginregistrpages/RegisterPage')
// );
// const NotPage = lazy(() => import('./pages/NotPage'));

// const HomePage = lazy(() => import('./pages/HomePage'));

const UserRoutes = () => {
  return (
    // <Suspense fallback="...Loading">
    <Routes>
      <Route path="*" element={<NotPage />} />
      {/* <Route element={<PublicRoute />}> */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* </Route> */}
      {/* <Route element={<PrivateRoute />}> */}
      <Route path="/home" element={<DashboardPage />} />
      <Route path="/currency" element={<CurrencyPage />} />
       <Route path="/statistic" element={<SummaryPage />} />
      {/* </Route> */}
    </Routes>
    // </Suspense>
  );
};
export default UserRoutes;