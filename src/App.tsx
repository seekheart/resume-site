import {SideNav} from "./components/SideNav.tsx";
import {Outlet} from "react-router-dom";

export const App = () => {
    return (
        <>
            <div className="flex h-screen">
                <SideNav />
                <Outlet/>
            </div>
        </>
    )
}
