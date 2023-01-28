import {useNavigate} from "react-router-dom"
import logo from "../components/img/logo.svg"

const NotFound = () => {

    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <div className='formBackground notFound overflow-hidden'>
            <img className='notFoundLogo' src={logo} alt='logo'/>
            <h1>Oops!</h1>
            <p>Страница не найдена!</p>
            <button className='btn btn-primary' onClick={goBack}>Вернуться назад</button>
        </div>
    )
}

export default NotFound