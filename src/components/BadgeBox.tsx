import {NavLink} from "react-router-dom";

export type Badge = {id: number, icon: string, link: string}
interface BadgeBoxProps {
    badges: Badge[];
}
export const BadgeBox = ({badges}: BadgeBoxProps) => {
    return (
        <div className="bg-midnight-green w-2/3 h-fit rounded">
            <div className="bg-dartmouth-green h-1/4 w-full rounded flex justify-center align-center">
                <h1 className="text-[3rem] text-white font-semibold p-7">My Software Engineering Journey</h1>
            </div>
            <div className="grid grid-cols-2 gap-8 py-16 px-32 justify-items-center">
                {badges && badges.map(b => {
                    return (
                        <div className="w-60 h-60">
                            <NavLink to={b.link} id={b.id}>
                            <img className="rounded-full ring-white ring-2 w-60 h-60" src={b.icon} alt="jobIcon"/>
                            </NavLink>
                        </div>
                    )
                })}
            </div>
        </div>

    )

}