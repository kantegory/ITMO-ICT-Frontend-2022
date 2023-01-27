import Topbar from "../components/Topbar/Topbar";
import Users from "../components/Users";
import TodoList from "../components/TodoList/TodoList";

const Admin = () => {
    return (
        <Topbar title={'Админка'}>
            <div className='col col-lg-4'>
                <div className='p-2 mx-3 rounded-5 mt-2 ItemList col'>
                    <Users/>
                </div>
            </div>
            <div className='col'>
                <div className='p-2 mx-3 rounded-5 mt-2 ItemList col'>
                    <TodoList/>
                </div>
            </div>
        </Topbar>
    )
}

export default Admin
