export interface Job {
    id: number
    icon: string;
    company: string;
    description: string;
    role: string;
    techStack: string;
    dateStart: string;
    dateEnd: string;
    link: string;
}
export const jobs: Job[] = [
    {
        id: 1,
        icon: 'https://media.licdn.com/dms/image/C560BAQGliJ0Yw7E0fA/company-logo_200_200/0/1630572091908/dana_farber_cancer_institute_logo?e=2147483647&v=beta&t=xeV86NxGuoTCa1SGsAV-xTl_FWMLyzk8Wk__-LBuzu8',
        link: '/jobs/1',
        company: 'Dana Farber Cancer Institute',
        description: "At Dana Farber Cancer Institute (DFCI), I served as a technical lead and full stack engineer. I provided solutions for how to build new frontend and backend applications using modernized technologies (previously internal applications were legacy).",
        role: "Bioinformatics Software Engineer",
        techStack: "Angular, Java, Python, HTML, CSS, Javascript/Typescript, Docker, Bash, Docker, Oracle SQL",
        dateStart: 'June 2016',
        dateEnd: 'June 2019'
    },
    {
        id: 2,
        icon: 'https://media.licdn.com/dms/image/C560BAQFaOUT92hURCg/company-logo_100_100/0/1656693734126/metromile_logo?e=1710374400&v=beta&t=3AVJpguYZizASqniMC1GYnr0c6tTOnGbw6ph1hK7OGQ',
        link: '/jobs/2',
        company: 'Metromile Inc',
        description: "As a Senior Engineer at Metromile, I contributed to the Amazon Cloud Infrastructure by improving and re-architecting the infrastructure to support scalability and automation. I provided frameworks for the automations and pioneered the usage of Kubernetes Helm Charts for fully automated deployment of our SASS application across multiple customers with high security guards around application secrets.",
        role: "Senior Software Engineer",
        techStack: "Java, Groovy, SQL, Typescript, React, AWS, Kubernetes,  Docker",
        dateStart: 'June 2019',
        dateEnd: 'July 2022'
    },
    {
        id: 3,
        icon: 'https://media.licdn.com/dms/image/C4D0BAQGqQT639IuRZA/company-logo_100_100/0/1630558486197/panalgo_logo?e=1710374400&v=beta&t=HKyUb0xE6KmFKLIVU0kN0XPj-Q_lPfDL6ig_CtPiGX0',
        link: '/jobs/3',
        company: 'Panalgo',
        description: "As a software Engineer II at Panalgo, I contributed to solving bugs and issues that are discovered by customers and internal product managers. Additionally I facilitated engineering discussions around setting guidelines and conventions for uniform code base.",
        role: "Software Engineer II",
        techStack: "Java, React, Python, Ruby, NoSql, Docker, Javascript, Typescript",
        dateStart: 'July 2022',
        dateEnd: 'Present'
    }
]