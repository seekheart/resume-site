import {AvatarIcon} from "./AvatarIcon.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {useNavigate} from "react-router-dom";


const IntroBlock = () => {
    return (
        <div className="flex-col px-16">
            <h2 className="inline-block text-white font-semibold text-header whitespace-nowrap">Mike Tung</h2>
            <h3 className="inline-block text-white font-lora font-semibold text-[1.5rem] whitespace-nowrap">Software Engineer</h3>
            <hr className="border-dartmouth-green mt-1.5"/>
        </div>
    );
}

const ContactBlock = () => {
    const links = [
        {id: 1, link: "mailto:miketung2013@gmail.com", icon: faEnvelope},
        {id: 2, link: "https://www.linkedin.com/in/mitung/", icon: faLinkedinIn},
        {id: 3, link: "https://github.com/seekheart", icon: faGithub}
    ]

    return (
        <div className="flex-col px-16 w-fit">
            <h2 className="font-semibold text-header text-white">Contact Me</h2>
            <ul className="list-none flex gap-4 items-center">
                {links.map(({id, link, icon})=> {
                    return (
                        <li key={id}>
                            <a className="inline-flex gap-6 text-white mb-4" href={link}>
                                <FontAwesomeIcon className="h-14 w-14 text-emerald" icon={icon}/>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export const SideNav = () => {
    const navigate = useNavigate();

    const returnHome = () => {
        navigate('/');
    }

    return (
        <div className="flex-col w-25 h-full bg-midnight-green justify-center">
            <div className="px-20 py-16 pb-1.5" onClick={returnHome}>
                <AvatarIcon
                    imagePath={"src/assets/selfie.jpg"}
                    altText={"stuff"}
                    className="w-40 h-40"/>
            </div>
            <IntroBlock/>
            <ContactBlock/>
        </div>
    )
}