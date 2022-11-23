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
            responsabilities: [t('experiences:activity1-dti'),t('experiences:activity2-dti'),t('experiences:activity3-dti')],
            dateStart: "08/2022",
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
        companyName: "Wattio",
        aboutMe:{
            role: t("experiences:role"),
            responsabilities: [t('experiences:activity1-wattio'),t('experiences:activity2-wattio'),t('experiences:activity3-wattio')],
            dateStart: "11/2021",
            dateEnd: "07/2022",
            tecs: ["react", "python", "flutter"],
        }
    },
    {
        img:{
            src: "companies/meuguru.jfif",
            alt: "Meu Guru"
        },
        aboutMe:{
            role: t("experiences:role"),
            dateStart: "01/2019",
            tecs: ["java", "c","ts", "python"],
            dateEnd: "12/2021",
            responsabilities: [t('experiences:activity1-meuguru'),t('experiences:activity2-meuguru'),t('experiences:activity3-meuguru')],
        },
        companyName: "Meu Guru"
    },
]