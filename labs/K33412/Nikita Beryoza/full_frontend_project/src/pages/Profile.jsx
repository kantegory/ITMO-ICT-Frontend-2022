import Topbar from "../components/Topbar/Topbar";
import useAuth from "../hooks/useAuth";

const Profile = () => {

    const { auth } = useAuth()

    const ROLES = {
        "Admin": 3,
        "Teacher": 2,
        "Student": 1
    }

    const DisplayRole = () => {
        let display = "Студент"
        let flag = false
        auth.roles.map(role => {
            if (role === ROLES.Admin && !flag) {
                display = "Админ"
                flag = true
            }
            else if (role === ROLES.Teacher && !flag) {
                display = "Тренер"
                flag = true
            }
            return role
        })
        return (<span>{display}</span>)
    }

    return (
        <Topbar title='Профиль'>
            <div className='d-flex flex-column w-100'>
                <div className="profile-content">
                    <div className='profile-personal-info'>
                        <div className="fs-3 text-start px-4 pt-2">Основная информация</div>
                        <div className='profile-info-text'>
                            <div className='fs-5'>ФИО: {auth.username || auth.user}</div>
                            <div>Роль: {<DisplayRole/>}</div>
                            <div className='text-break'>Ключ: {auth.accessToken}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Topbar>
    );
};

export default Profile;