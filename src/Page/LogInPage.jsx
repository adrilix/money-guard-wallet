import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logInThunk } from 'redux/userReducers/userThunks';

export default function LogInPage() {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const userData = useSelector(state => state.user.userData);

    useEffect(() => {
        if (!userData) return;

        navigate('/contacts', { replace: true });
    }, [userData, navigate])

    const haldleSubmit = event => {
        event.preventDefault();
        const formData = {
            email: event.currentTarget.elements.email.value,
            password: event.currentTarget.elements.password.value,
        };
        dispatch(logInThunk(formData));
        event.currentTarget.reset();
    }
    
    return (
        <div>
            <h1>вже зареєстровані? Введіть свої дані</h1>
            <form onSubmit={haldleSubmit}>
                <label>
                    <b>email :</b>
                    <br />
                    <input placeholder='shevchenko@mail.com'
                        type='email'
                        name="email"
                        autoComplete='clear on escape'
                        required
                    >
                    </input>
                </label>
                <label>
                    <br />
                    <b>password:</b>
                    <br />
                    <input
                        placeholder='examplepwd123'
                        type='password'
                        name="password"
                        autoComplete='clear on escape'
                        required
                    >
                    </input>
                </label>
                <br />
                <button type='submit'>log in</button>
                <p>якщо ще не реєструвалися, <Link to="/registration">натискайте сюди</Link></p>
            </form>
        </div>

    );
}
