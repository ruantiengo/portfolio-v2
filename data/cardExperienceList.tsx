export type CardExperienceType = {
    img: {
        src: string,
        alt: string
    },
    companyName: string,
    aboutMe:{
        role: string,
        tecs: string[],
        responsabilities: string[],
        dateStart: string,
        dateEnd: String
    }
}
export const cardListExperience: (t: any) => CardExperienceType[] = (t: any) => [
    {
        img:{
            src: "companies/dti.png",
            alt: "DTI Digital"
        },
        
        companyName: "DTI",
        aboutMe:{
            responsabilities: [],
            dateStart: "2022",
            dateEnd: "-",
            tecs: ["react", "csharp","azure", "flutter"],
            role: t("experiences:role"),
        }
        
    },
    {
        img:{
            src: "companies/wattio.jfif",
            alt: "Wattio"
        },
        companyName: "Meu Guru",
        aboutMe:{
            role: t("experiences:role"),
            responsabilities: [],
            dateStart: "2021",
            dateEnd: "2022",
            tecs: ["react", "python"],
        }
    },
    {
        img:{
            src: "companies/meuguru.jfif",
            alt: "Meu Guru"
        },
        aboutMe:{
            role: t("experiences:role"),
            dateStart: "2019",
            tecs: ["java", "c","ts", "python"],
            dateEnd: "2021",
            responsabilities: [],
        },
        companyName: "Meu Guru"
    },
]