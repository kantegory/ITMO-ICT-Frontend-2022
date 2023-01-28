import { Link } from "react-router-dom"

const Teacher = () => {
    return (
        <section>
            <h1>Страница Тренера</h1>
            <br />
            <p>Вам должна быть назначена роль тренера.</p>
            <div className="flexGrow">
                <Link to="/">Главная</Link>
            </div>
        </section>
    )
}

export default Teacher
