import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="App">
            <Outlet />
        </div>
    )
}

export default Layout;
