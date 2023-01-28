import React, {useEffect, useRef, useState} from 'react';
import cl from './StudentForm.module.css';
import clForm from '../../../styles/Form.module.css';

const StudentForm = ({ student , modal }) => {

    const [homeworkDone, setHomeworkDone] = useState("")
    const [homeworkNotDone, setHomeworkNotDone] = useState("")
    const [homeworkTried, setHomeworkTried] = useState("")
    const [nextHomework, setNextHomework] = useState("")
    const [doneOnLesson, setDoneOnLesson] = useState("")

    const errRef = useRef()
    const [errMsg, setErrMsg] = useState("")

    useEffect(() => {
        setHomeworkDone(student.homeworkDone)
        setHomeworkNotDone(student.homeworkNotDone)
        setHomeworkTried(student.homeworkTried)
        setNextHomework(student.nextHomework)
        setDoneOnLesson(student.doneOnLesson)
    },[modal])

    return (
        <div className={cl.studentForm}>
            <p ref={errRef} className={errMsg ? clForm.errMsg : clForm.offscreen} aria-live="assertive">{errMsg}</p>
            <h2 className='text-center mb-4'>Ученик {student.studentId}</h2>
            <br/>
            <form className='d-flex justify-content-center flex-column'>
                <div className="form-group mb-2 text-start">
                    <label htmlFor="username" className='form-label'>
                        Имя пользователя:
                        {/*<Icon icon={<AiOutlineCheck/>} classes={validName ? cl.valid : cl.hide}/>*/}
                        {/*<Icon icon={<FaTimes/>} classes={!validName ? cl.valid : cl.hide}/>*/}
                    </label>
                    <input
                        type="text"
                        id="username"
                        autoComplete="off"
                        className='form-control'
                        required
                        aria-describedby="uidNote"
                    />
                </div>
                <div className="form-group mb-2 text-start">
                    <label htmlFor="username" className='form-label'>
                        Имя пользователя:
                        {/*<Icon icon={<AiOutlineCheck/>} classes={validName ? cl.valid : cl.hide}/>*/}
                        {/*<Icon icon={<FaTimes/>} classes={!validName ? cl.valid : cl.hide}/>*/}
                    </label>
                    <input
                        type="text"
                        id="username"
                        autoComplete="off"
                        className='form-control'
                        required
                        aria-describedby="uidNote"
                    />
                </div>
                <div className="form-group mb-2 text-start">
                    <label htmlFor="username" className='form-label'>
                        Имя пользователя:
                        {/*<Icon icon={<AiOutlineCheck/>} classes={validName ? cl.valid : cl.hide}/>*/}
                        {/*<Icon icon={<FaTimes/>} classes={!validName ? cl.valid : cl.hide}/>*/}
                    </label>
                    <input
                        type="text"
                        id="username"
                        autoComplete="off"
                        className='form-control'
                        required
                        aria-describedby="uidNote"
                    />
                </div>

                <div className="form-group mb-2 text-start">
                    <label htmlFor="username" className='form-label'>
                        Пароль:
                        {/*<Icon icon={<AiOutlineCheck/>} classes={validName ? cl.valid : cl.hide}/>*/}
                        {/*<Icon icon={<FaTimes/>} classes={validName ? cl.valid : cl.hide}/>*/}
                    </label>
                    <input
                        type="text"
                        id="password"
                        className='form-control'
                        required
                        aria-describedby="pwdNote"
                    />
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
                        required
                        aria-describedby="confirmNote"
                    />
                </div>

                <br/>
                <br/>
                <div className="d-inline-block text-center">
                    <button
                        className='btn btn-primary'
                    >
                        Зарегистрировать
                    </button>
                </div>
            </form>
        </div>
    );
};

export default StudentForm;