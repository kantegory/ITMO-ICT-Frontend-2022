import { useRef, useState, useEffect } from "react";
import { AiOutlineCheck } from "react-icons/ai"
import { FaTimes } from "react-icons/fa"
import { BsInfoCircle } from "react-icons/bs"
import axios from '../http/index';
import { Navigate } from "react-router-dom";
import Icon from "../components/UI/Icon/Icon";
import cl from "../styles/Form.module.css"

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [role, setRole] = useState(1)

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Неправильный ввод");
            return;
        }
        try {
            const response = await axios.post('/register',
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            setSuccess(true);
            setUser('');
            setPwd('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('Сервер не отвечает');
            } else if (err.response?.status === 409) {
                setErrMsg('Такой пользователь уже существует');
            } else {
                setErrMsg('Регистрация не удалась')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <Navigate to='/'/>
            ) : (
                <div className='overflowHide'>
                    <div className='form-container mx-auto'>
                        <div className='w-100'>
                            <p ref={errRef} className={errMsg ? cl.errMsg : cl.offscreen} aria-live="assertive">{errMsg}</p>
                            <h2 className='text-center mb-4'>Регистрация пользователя</h2>
                            <br/>
                            <form onSubmit={handleSubmit} className='d-flex justify-content-center flex-column'>
                                <div className="form-group mb-2 text-start">
                                    <label htmlFor="username" className='form-label'>
                                        Имя пользователя:
                                        {/*<Icon icon={<AiOutlineCheck/>} classes={validName ? cl.valid : cl.hide}/>*/}
                                        {/*<Icon icon={<FaTimes/>} classes={!validName ? cl.valid : cl.hide}/>*/}
                                    </label>
                                    <input
                                        type="text"
                                        id="username"
                                        ref={userRef}
                                        autoComplete="off"
                                        className='form-control'
                                        onChange={(e) => setUser(e.target.value)}
                                        value={user}
                                        required
                                        aria-invalid={validName ? "false" : "true"}
                                        aria-describedby="uidNote"
                                        onFocus={() => setUserFocus(true)}
                                        onBlur={() => setUserFocus(false)}
                                    />
                                    <p
                                        id="uidNote"
                                        className={userFocus && user && !validName ? cl.instructions : cl.offscreen
                                            + ' form-text'}
                                    >
                                        <Icon icon={<BsInfoCircle/>}/>
                                        от 4 до 24 символов.<br />
                                        Должен начинаться с буквы.<br />
                                        Допускаются буквы, цифры, символы подчеркивания, дефисы.
                                    </p>
                                </div>

                                <div className="form-group mb-2 text-start">
                                    <label htmlFor="password" className='form-label'>
                                        Пароль:
                                        {/*<Icon icon={<AiOutlineCheck/>} classes={validName ? cl.valid : cl.hide}/>*/}
                                        {/*<Icon icon={<FaTimes/>} classes={validName ? cl.valid : cl.hide}/>*/}
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        className='form-control'
                                        onChange={(e) => setPwd(e.target.value)}
                                        value={pwd}
                                        required
                                        aria-invalid={validPwd ? "false" : "true"}
                                        aria-describedby="pwdNote"
                                        onFocus={() => setPwdFocus(true)}
                                        onBlur={() => setPwdFocus(false)}
                                    />
                                    <p
                                        id="pwdNote"
                                        className={pwdFocus && !validPwd ? cl.instructions : cl.offscreen
                                            + ' form-text'}>
                                        <Icon icon={<BsInfoCircle/>}/>
                                        от 8 до 24 символов.<br />
                                        Должен содержать заглавные и строчные буквы, цифру и специальный символ.<br />
                                        Разрешенные специальные символы:
                                        <span aria-label="exclamation mark">!</span>
                                        <span aria-label="at symbol">@</span>
                                        <span aria-label="hashtag">#</span>
                                        <span aria-label="dollar sign">$</span>
                                        <span aria-label="percent">%</span>
                                    </p>
                                </div>

                                <div className="form-group mb-3 text-start">
                                    <label htmlFor="confirm_pwd" className='form-label'>
                                        Подтвердите пароль:
                                        {/*<Icon icon={<AiOutlineCheck/>} classes={validName ? cl.valid : cl.hide}/>*/}
                                        {/*<Icon icon={<FaTimes/>} classes={validName ? cl.valid : cl.hide}/>*/}
                                    </label>
                                    <input
                                        type="password"
                                        id="confirm_pwd"
                                        className='form-control'
                                        onChange={(e) => setMatchPwd(e.target.value)}
                                        value={matchPwd}
                                        required
                                        aria-invalid={validMatch ? "false" : "true"}
                                        aria-describedby="confirmNote"
                                        onFocus={() => setMatchFocus(true)}
                                        onBlur={() => setMatchFocus(false)}
                                    />
                                    <p
                                        id="confirmNote"
                                        className={matchFocus && !validMatch ? cl.instructions : cl.offscreen
                                            + ' form-text'}>
                                        <Icon icon={<BsInfoCircle/>}/>
                                        Должен соответствовать первому полю ввода пароля.
                                    </p>
                                    <select
                                        value={role}
                                        onChange={(e) => setRole(parseInt(e.target.value, 10))}
                                        className='form-select mt-2'
                                    >
                                        <option value={1}>Студент</option>
                                        <option value={2}>Тренер</option>
                                        <option value={3}>Админ</option>
                                    </select>
                                </div>

                                <br/>
                                <br/>
                                <div className="d-inline-block text-center">
                                <button
                                    className='btn btn-primary '
                                    disabled={!validName || !validPwd || !validMatch}
                                >
                                    Зарегистрировать
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Register
