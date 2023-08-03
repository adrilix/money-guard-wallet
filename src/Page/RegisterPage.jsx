import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerThunk } from 'redux/userReducers/userThunks';

export default function RegisterPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector(state => state.user.userData);

    useEffect(()=>{
        if(!userData) return;
        navigate ('/contacts', {replace: true}); 
    },[userData, navigate])

    const haldleSubmit = event =>{
        event.preventDefault();
        const formData = {
            name : event.currentTarget.elements.name.value,
            email: event.currentTarget.elements.email.value,
            password: event.currentTarget.elements.password.value,
        };
        console.log(formData);
        dispatch(registerThunk(formData));
        event.currentTarget.reset();

    }

    return (

        <div>
            <h1>Зареєструйся, будь ласка</h1>
            <form onSubmit = {haldleSubmit}>
                <label>
                    <b>name :</b>
                    <br />
                    <input 
                    placeholder='Taras Shevchenko'
                    type='text'
                    name="name"
                    autoComplete='clear on escape'
                    required
                    >                        
                    </input>
                </label>

                <label>
                    <br />
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
                <button type='submit'>registration</button>
                <br />
                <Link to='/login'>Тисни сюди, якщо вже зареєстрована (ий)</Link>

            </form>
        </div>

    );
}
