import cl from './Topbar.module.css';
import useAuth from "../../hooks/useAuth";
import useLogout from "../../hooks/useLogout";
import Icon from "../UI/Icon/Icon";
import {RiArrowDropDownFill} from "react-icons/ri";
import {Link} from "react-router-dom";

const Topbar = ({children, title}) => {

    const { auth } = useAuth()

    return (
        <div className="container-fluid">
            <div className="row">
                <div className={cl.topNav}>
                    <div className={cl.topNavTitle}>{title}</div>
                    <div className={cl.dropdown}>
                        <button className={cl.dropBtn}>
                            <div className='d-flex justify-content-center align-items-center'>
                                {auth.username || auth.user || "JCI"}
                                <Icon icon={<RiArrowDropDownFill/>} classes={cl.dropdownIcon}/>
                            </div>
                        </button>
                        <div className={cl.dropdownContent}>
                            <Link to='/profile' className={cl.linkOne}>Профиль</Link>
                            <Link to='/' className={cl.linkTwo} onClick={useLogout()}>Выйти</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4 row'>
                {children}
            </div>
        </div>
    );
};

export default Topbar;