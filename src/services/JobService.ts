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
        description: "I did stuff",
        role: "Bioinformatics Software Engineer",
        techStack: "Java, Angular, D3JS, Python, SQL, NoSql, Docker",
        dateStart: '1/1/1991',
        dateEnd: '1/2/2000'
    },
    {
        id: 2,
        icon: 'https://media.licdn.com/dms/image/C560BAQFaOUT92hURCg/company-logo_100_100/0/1656693734126/metromile_logo?e=1710374400&v=beta&t=3AVJpguYZizASqniMC1GYnr0c6tTOnGbw6ph1hK7OGQ',
        link: '/jobs/2',
        company: 'Metromile Inc',
        description: "I did stuff",
        role: "Senior Software Engineer",
        techStack: "Java, Typescript, React, Kubernetes, AWS, SQL, NoSql, Docker",
        dateStart: '1/1/1991',
        dateEnd: '1/2/2000'
    },
    {
        id: 3,
        icon: 'https://media.licdn.com/dms/image/C4D0BAQGqQT639IuRZA/company-logo_100_100/0/1630558486197/panalgo_logo?e=1710374400&v=beta&t=HKyUb0xE6KmFKLIVU0kN0XPj-Q_lPfDL6ig_CtPiGX0',
        link: '/jobs/3',
        company: 'Panalgo',
        description: "I did stuff",
        role: "Software Engineer II",
        techStack: "Java, React, Python, Ruby, NoSql, Docker, Javascript, Typescript",
        dateStart: '1/1/1991',
        dateEnd: '1/2/2000'
    }
]