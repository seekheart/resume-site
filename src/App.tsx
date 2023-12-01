import {SideNav, SideNavRoute} from "./components/SideNav.tsx";
import {Outlet} from "react-router-dom";

export const App = () => {
    const routes: SideNavRoute[] = [
        {path: '/', linkName: 'Home'}
    ]

    return (
        <>
            <div className="flex h-screen">
                <SideNav routes={routes}/>
                <Outlet/>
            </div>
        </>
    )
}
