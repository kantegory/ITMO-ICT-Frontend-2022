import React from 'react';
import TodoList from "../components/TodoList/TodoList";
import Topbar from "../components/Topbar/Topbar";
import LessonsList from "../components/LessonsList/LessonsList";

const Main = () => {

    return (
        <Topbar title={'Главная'}>
                {/*<div className='col-8'>*/}
                {/*    <div className='p-2 mx-3 rounded-5 mt-2 ItemList col'>*/}
                {/*        <LessonsList/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className='col'>*/}
                {/*    <div className='p-2 mx-3 rounded-5 mt-2 ItemList col'>*/}
                {/*        <TodoList/>*/}
                {/*    </div>*/}
                {/*</div>*/}
            <div className='d-flex justify-content-center'>
                <p>
                    Идёт работа)
                    Возможно страница будет удалена
                </p>
            </div>
        </Topbar>
    );
};

export default Main;