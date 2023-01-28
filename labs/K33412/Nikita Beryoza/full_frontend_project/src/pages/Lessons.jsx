import Topbar from "../components/Topbar/Topbar";
import LessonsList from "../components/LessonsList/LessonsList";

const Lessons = () => {
    return (
        <Topbar title={'Уроки'}>
            <div className='col-9'>
                <LessonsList/>
            </div>
        </Topbar>
    )
}

export default Lessons;
