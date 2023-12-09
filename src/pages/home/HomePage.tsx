import {BadgeBox} from "../../components/BadgeBox.tsx";
import {jobs} from "../../services/JobService.ts";

export const HomePage = () => {
    return (
        <div className="w-full h-full flex-col pt-64 px-16">
            <BadgeBox badges={jobs}/>
        </div>
    )
}