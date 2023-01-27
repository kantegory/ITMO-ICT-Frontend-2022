import React, {useEffect, useState} from 'react';
import { FaChalkboardTeacher }from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { FiLogIn } from "react-icons/fi";
import { MdOutlineAppRegistration } from "react-icons/md"
import { IoIosKeypad } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { TbSofa } from "react-icons/tb"
import logoText from '../img/logo_text.svg';
import logo from '../img/logo.svg';
import {RiAdminLine} from "react-icons/ri";
import cl from "./Sidebar.module.css"
import useAuth from "../../hooks/useAuth";


const Sidebar = () => {

    const ROLES = {
        "Admin": 3,
        "Teacher": 2,
        "Student": 1
    };
    const { auth } = useAuth();
    const [adminFlag, setAdminFlag] = useState(false)
    const [teacherFlag, setTeacherFlag] = useState(false)
    const [isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path: "/",
            name: "Главная",
            roles: [ROLES.Student],
            icon: <IoIosKeypad/>
        },
        {
            path: "/admin",
            name: "Админ",
            roles: [ROLES.Admin],
            icon: <RiAdminLine/>
        },
        {
            path: "/lessons",
            name: "Уроки",
            roles: [ROLES.Teacher, ROLES.Admin],
            icon: <FaChalkboardTeacher/>
        },
        {
            path: "/profile",
            name: "Профиль",
            roles: [ROLES.Student],
            icon: <CgProfile/>
        }
    ];

    useEffect(() => {
        if (auth.roles.includes(ROLES.Admin)) setAdminFlag(true)
        if (auth.roles.includes(ROLES.Teacher)) setTeacherFlag(true)
    }, [auth])

    return (
        <div style={{width: isOpen ? "98px" : "240px"}} className={cl.sidebar}>
            <div className={cl.top_section}>
                <div className={cl.sidebarImage} style={{padding: isOpen ? "11px 0" : "10px"}} onClick={toggle}>
                    <div style={{paddingLeft: isOpen ? "10px" : "", marginTop: isOpen ? "-1px" : ""}}>
                        <img
                            className={cl.sidebarImageLogo}
                            src={logo}
                            alt={'Logo'}
                            draggable={false}
                        />
                    </div>
                    <div style={{display: isOpen ? "none" : "block"}}>
                        <img
                            className={cl.sidebarImageText}
                            src={logoText}
                            alt={'Logo'}
                            draggable={false}
                        />
                    </div>
                </div>
            </div>
            {
                menuItem.map((item, index)=> {
                    if (adminFlag && (item.roles.includes(ROLES.Admin) || item.roles.includes(ROLES.Student)))
                    return (
                        <NavLink to={item.path} key={index} className={cl.sidebarLink}>
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "none" : "block"}} className={cl.link_text}>{item.name}</div>
                        </NavLink>
                    );
                    else if (teacherFlag && (item.roles.includes(ROLES.Teacher) || item.roles.includes(ROLES.Student)))
                    return (
                        <NavLink to={item.path} key={index} className={cl.sidebarLink}>
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "none" : "block"}} className={cl.link_text}>{item.name}</div>
                        </NavLink>
                    );
                    else if (item.roles.includes(ROLES.Student) && !adminFlag && !teacherFlag)
                    return (
                        <NavLink to={item.path} key={index} className={cl.sidebarLink}>
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "none" : "block"}} className={cl.link_text}>{item.name}</div>
                        </NavLink>
                    )
                })
            }
        </div>
    );
};

export default Sidebar;