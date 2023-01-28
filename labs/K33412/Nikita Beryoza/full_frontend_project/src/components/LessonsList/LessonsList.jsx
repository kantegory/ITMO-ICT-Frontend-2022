import React, {useEffect, useState} from 'react';
import Student from "./Student/Student";
import MyModal from "../UI/MyModal/MyModal";
import {useFetching} from "../../hooks/useFetching";
import StudentService from "../../service/StudentService";
import Spinner from "../UI/Spinner/Spinner";
import DatePicker from "../UI/DatePicker/DatePicker";
import clForm from "../../styles/Form.module.css";
import {validateSearch} from "../SearchValidation";
import StudentForm from "./StudentForm/StudentForm";
import {useOnKeyDown} from "../../hooks/useOnKeyDown";
import cl from './LessonsList.module.css';

const LessonsList = () => {

    const [students, setStudents] = useState([{}]);

    const [studentData, setStudentData] = useState({
        studentId: 0,
        homework: "",
        homeworkTried: "",
        homeworkDone: "",
        homeworkNotDone: "",
        lessonDate: "",
        nextHomework: "",
        doneOnLesson: "",
        toDo: ""
    })

    const [modal, setModal] = useState(0);

    const [emptyList, setEmptyList] = useState(true)

    const [pickedDate, setPickedDate] = useState(new Date())

    const [openedCal, setOpenedCal] = useState(false)

    const [errMsg, setErrMsg] = useState('')

    const [group, setGroup] = useState('')

    const [fetchStudents, isLoading, studentError] = useFetching(async () => {
        const response = await StudentService.getStudents()
        setEmptyList(false)
        setStudents(response.data)
        if (studentError) console.log(`Ошибка в запросе студентов > ${studentError}`)
    })

    useEffect(() => {
        setErrMsg('')
    }, [pickedDate, group])

    const handleSearch = () => {
        const searchValidation = validateSearch(pickedDate, group)
        if (searchValidation !== "OK") {
            setErrMsg(searchValidation)
            return
        }
        fetchStudents()
    }

    const callStudentForm = (student) => {
        setStudentData({
            studentId: student.id,
            homework: student.address.street,
            homeworkTried: student.address.suite,
            homeworkDone: student.address.zipcode,
            homeworkNotDone: student.website,
            lessonDate: student.phone,
            nextHomework: student.company.name,
            doneOnLesson: student.company.catchPhrase,
            toDo: student.company.bs
        })
        setModal(1)
    }

    const SelectGroup = () => {
        const year = pickedDate.getFullYear()
        const month = pickedDate.getMonth()
        const day = pickedDate.getDate()

        return(
            <div className='input-group mb-1'>
                <label
                    className="form-control"
                    onClick={() => setOpenedCal(true)}
                >
                    {day + "/" + (month + 1) + "/" + year}
                </label>
                <select
                    className="form-select"
                    value={group}
                    onChange={(e) => setGroup(e.target.value)}
                >
                    <option defaultValue>Выберите группу</option>
                    <option value="1">Логика 1</option>
                    <option value="2">Логика 2</option>
                    <option value="3">Логика 3</option>
                </select>
                <button className="btn btn-primary" onClick={handleSearch}>Выбрать</button>
            </div>
        )
    }

    const turnOffModal = (e) => {setModal(0)}

    useOnKeyDown(turnOffModal, 'Escape')

    return (
        <Spinner isLoading={isLoading}>
            <div className={'ItemList col ' + cl.lessonsList}>
                <MyModal visible={modal} setVisible={setModal}>
                    <StudentForm student={studentData} modal={modal}/>
                </MyModal>
                <div className={cl.workOnLessonTitle}>
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <div className='px-4 fs-3'>Работа на уроке</div>
                    </div>
                    <p className={errMsg ? clForm.errMsg : clForm.offscreen}>{errMsg}</p>
                    <SelectGroup/>
                    <DatePicker setPickedDate={setPickedDate} openedCal={openedCal} setOpenedCal={setOpenedCal}/>
                </div>
                <ul className="list-group p-2 pt-0">
                    {students.map(student => {
                        return (
                            <div key={student.id + 1}>
                                <Student
                                    student={student}
                                    empty={emptyList}
                                    callStudentForm={callStudentForm}
                                />
                            </div>
                        )
                    })}
                </ul>
            </div>
        </Spinner>
    );
};

export default LessonsList;