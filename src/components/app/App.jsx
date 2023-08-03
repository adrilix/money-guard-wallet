import { DivStyled, NavStyled } from './AppStyled';

import { Suspense, lazy, useEffect } from 'react';
import { LoaderSpinner } from 'components/Loader/Loader';
import { Link, Route, Routes } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk, refreshUserThunk } from 'redux/userReducers/userThunks';
import UserMenu from 'components/UserMenu/UserMenu';

const HomePage = lazy(() => import('../../Page/HomePage'));
const LogInPage = lazy(() => import('../../Page/LogInPage'));
const RegisterPage = lazy(() => import('../../Page/RegisterPage'));
const ContactsPage = lazy(() => import('../../Page/ContactsPage'));

function App() {
  const userData = useSelector(state => state.user.userData);
  const token = useSelector(state => state.user.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;

    dispatch(refreshUserThunk());

  }, [dispatch, token]);

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <DivStyled>
      <header>
        <NavStyled>
          <Link to="/">home</Link>
          {userData ? (
            <>
              <Link to="/contacts">Contacts</Link>
              <UserMenu userName={userData.name} handleLogOut={handleLogOut} />
            </>
          ) : (
            <>
              <Link to="/login">log in</Link>
              <Link to="/registration">sign in</Link>
            </>
          )}
        </NavStyled>
      </header>
      <main>
        <Suspense fallback={<LoaderSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/registration" element={<RegisterPage />}/>
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </main>
    </DivStyled>
  );
}

export default App;
