type LinkType = {
    text: string
    link: string
}

export const menuLink: (t: any) => LinkType[] = (t: any) => [
    {
        link: "#about",
        text: t("hero:aboutMenu")
    },
    {
        link: "#experience",
        text: t("hero:experienceMenu")
    },
    {
        link: "#skills",
        text: t("hero:skillsMenu")
    },
    {
        link: "#projects",
        text: t("hero:projectsMenu")
    },
    {
        link: "/blog",
        text: t("hero:blogMenu")
    }
]