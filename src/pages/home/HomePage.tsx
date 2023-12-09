import {Badge, BadgeBox} from "../../components/BadgeBox.tsx";
import {jobs} from "../../services/JobService.ts";

export const HomePage = () => {
    const jobBadges: Badge[] = jobs.map(j => {
        return {id: j.id, icon: `src/assets/${j.icon}`, link: j.link}
    })

    return (
        <div className="w-full h-full flex-col pt-64 px-16">
            <BadgeBox badges={jobBadges}/>
        </div>
    )
}