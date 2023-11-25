import {NavLink} from "react-router-dom";


export interface SideNavRoute {
    path: string;
    linkName: string;
}

interface SideNavProps {
    routes: SideNavRoute[];
}

export const SideNav = ({routes}: SideNavProps) => {
    const setSideNavClass = (isActive: boolean): string => {
        const defaultClasses = ['font-bold'];
        const result = isActive ? ['text-green-500', ...defaultClasses] : defaultClasses;
        return result.join(' ');
    }
    return (
        <nav className="flex-col bg-red-400 h-full px-8 py-16">
            <ul className="list-none">
                {routes && routes.map(r => {
                    return (
                        <li>
                            <NavLink className={({isActive}) => setSideNavClass(isActive)}
                                     to={r.path}>{r.linkName}
                            </NavLink>
                        </li>)
                })}
            </ul>
        </nav>
    )
}