import {AvatarIcon} from "../../components/AvatarIcon.tsx";
import {Job, jobs} from "../../services/JobService.ts";
import {LoaderFunctionArgs, useLoaderData} from "react-router-dom";

interface JobDescriptorProps {
    heading: string;
    text: string;
}

export const JobLoader =  ({ params }: LoaderFunctionArgs) => {
    const job = jobs.find(j => j.id.toString() === params.id) || null;
    return job;
}

const JobDescriptor = ({heading, text}: JobDescriptorProps) => {
    return (
        <div className="flex gap-8 py-8 px-8">
            <h2 className="text-6xl font-semibold flex-1">{heading}</h2>
            <p className="flex-1 text-lg">{text}</p>
        </div>
    )
}

export const JobsPage = () => {
    const job = useLoaderData() as Job;
    console.log(job);
    return (
        <div className="py-[112px] px-[140px]">
            <div className="bg-transparent border rounded w-[800px] h-[800px]">
                <div className="bg-dartmouth-green w-full h-1/4">
                    <div className="flex p-8 gap-[4.5rem]">
                        <AvatarIcon imagePath={job.icon} altText="company_logo" className="w-32 h-32"/>
                        <div className="flex-col">
                            <h2 className="text-white font-semibold text-4xl truncate">{job.company}</h2>
                            <h3 className="text-white text-4xl pt-4">{job.dateStart} - {job.dateEnd}</h3>
                        </div>
                    </div>
                </div>
                <div className="flex-col">
                    <JobDescriptor heading="role" text={job.role}/>
                    <JobDescriptor heading="bio" text={job.description}/>
                    <JobDescriptor heading="tech" text={job.techStack}/>
                </div>
            </div>
        </div>
    );
}