import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function HomePage() {
  const userData = useSelector(state => state.user.userData);
  return (
    <div>
      <h1>
        вітаю в щасливій телефонній книзі, яка дарує посмішки після реєстрації
      </h1>
      {userData ? (
        <>
          <p>
            ви вже авторизувалися, починайте посміхатися зараз 
            <br />
            та переходьте <Link to="/contacts">до контактів</Link>
          </p>
        </>
      ) : (
        <>
          <Link to="/login">Тисни сюди, якщо вже зареєстрована (ий)</Link>
          <br />
          <Link to="/registration">Тисни сюди для реєстрації</Link>
        </>
      )}
    </div>
  );
}

export default HomePage;
