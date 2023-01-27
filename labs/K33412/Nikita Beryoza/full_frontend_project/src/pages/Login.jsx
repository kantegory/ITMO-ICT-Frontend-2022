import React, {useEffect, useRef, useState} from 'react';
import logo from '../components/img/logo.svg';
import {useLocation, useNavigate} from 'react-router-dom';
import useInput from "../hooks/useInput";
import useToggle from "../hooks/useToggle";
import useAuth from "../hooks/useAuth";
import axios from '../http/index';
import cl from "../styles/Form.module.css";

const Login = () => {

    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [user, resetUser, userAttribs] = useInput('user', '')
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [check, toggleCheck] = useToggle('persist', false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/auth",
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            resetUser();
            setPwd('');
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('Нет ответа сервера');
            } else if (err.response?.status === 400) {
                setErrMsg('Отсутствует имя пользователя или пароль');
            } else if (err.response?.status === 401) {
                setErrMsg('Неверные имя пользователя или пароль');
            } else {
                setErrMsg('Ошибка Входа');
            }
            errRef.current.focus();
        }
    }

    return (
        <div className='formBackground d-flex align-items-center overflowHide'>
            <div className='d-flex flex-column form-container mx-auto'>
                <div className='flex-grow-1 d-flex align-items-center auth-form'>
                    <div className='w-100'>
                        <p ref={errRef} className={errMsg ? cl.errMsg : cl.offscreen} aria-live="assertive">{errMsg}</p>
                        <div className='text-center'>
                            <img className='logo' src={logo} alt={'Logo'}/>
                        </div>
                        <div className='text-center h3 mb-4'>Вход</div>
                        <div>
                            <form className='d-flex flex-column' onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label className='form-label' htmlFor="username">
                                        Имя пользователя
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id="username"
                                        ref={userRef}
                                        autoComplete="off"
                                        {...userAttribs}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label className='form-label' htmlFor="password">
                                        Пароль
                                    </label>
                                    <input
                                        type='password'
                                        className='form-control'
                                        id="password"
                                        onChange={(e) => setPwd(e.target.value)}
                                        value={pwd}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <input
                                        type='checkbox'
                                        className='form-check-input'
                                        id="persist"
                                        onChange={toggleCheck}
                                        checked={check}
                                    />
                                    <label className='form-check-label mx-2' htmlFor='persist'>
                                        Запомнить устройство
                                    </label>
                                </div>
                                <button className='btn btn-primary mb-2'>
                                    Вход
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;