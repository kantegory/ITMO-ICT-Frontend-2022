import cl from "./Student.module.css";
import defaultProfileImg from '../../img/defaultProfileImage.png';
import test from '../../img/test.png';

const Student = ({empty, student, callStudentForm}) => {

    if (empty) {
        return (
            <div className={"my-2 fs-4 text-break text-center " + cl.student}>Выберите дату и группу</div>
        )
    }

    return (
        <li
            className={'pb-2 rounded-3 mt-2 border container ' + cl.student + " " + cl.studentAction}
            onClick={() => callStudentForm(student)}
        >
            <div className='py-2 row justify-content-center'>
                <div className='col-lg-5 col-md-4'>
                    <div className={cl.studentProfileImage}>
                        <img src={test} alt='Картинка профиля' className={cl.studentProfileImageSrc}/>
                    </div>
                </div>
                <div className={cl.studentInfo + " col-lg mt-2 col-md"}>
                    <div className='mb-1'>ФИО: {student?.name || "JustContestIt"}</div>
                    <div className='mb-1'>Группа: {student?.company.name || student?.groupId || "Группа 4"}</div>
                    <div className='mb-1'>Username: {student?.username || "JCI"}</div>
                </div>
            </div>
            <div className={cl.studentLessonInfo + " row"}>
                <div className='col-md-5 col-sm-12 mx-2'>
                    <div className={cl.lessonWorkTitle}>
                        Домашняя работа
                    </div>
                    <ul className={"col list-group-numbered " + cl.lessonWorkList}>
                        <li className={cl.lessonWorkListItem}>
                            {student?.name || "JustContestIt"}: 2, 4, 6, 7
                        </li>
                        <li className={cl.lessonWorkListItem}>
                            {student?.email}: 1, 2, 3, 4, 5, 6
                        </li>
                        <li className={cl.lessonWorkListItem}>
                            {student?.phone}: 1
                        </li>
                    </ul>
                </div>
                <div className='col-md-5 col-sm-12'>
                    <div className={cl.lessonWorkTitle}>
                        Классная работа
                    </div>
                    <ul className={"col list-group-numbered " + cl.lessonWorkList}>
                        <li className={cl.lessonWorkListItem}>
                            {student?.username || "JCI"}: 2, 4, 6, 7
                        </li>
                        <li className={cl.lessonWorkListItem}>
                            {student?.website}: 1, 2, 3, 4, 5, 6
                        </li>
                        <li className={cl.lessonWorkListItem}>
                            {student?.company.catchPhrase}: 1
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    );
};

export default Student;