import { Link } from "react-router-dom"

const LinkPage = () => {
    return (
        <section>
            <h1>Ссылки</h1>
            <br />
            <h2>Публичные</h2>
            <Link to="/login">Логин</Link>
            <Link to="/register">Регистрация</Link>
            <br />
            <h2>Закрытые</h2>
            <Link to="/">Главная</Link>
            <Link to="/profile">Профиль</Link>
            <Link to="/teacher">Страница Тренера</Link>
            <Link to="/admin">Админка</Link>
            <Link to="/lounge">Лаундж</Link>
        </section>
    )
}

export default LinkPage
