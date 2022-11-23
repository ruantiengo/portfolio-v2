import useTranslation from "next-translate/useTranslation";

export const AppConfig = () => {
    const { t } = useTranslation()
    return {
        title: "Ruan Tiengo",
        site_name: "Ruan Tiengo",
        description: t("meta:description"),
        canonical: "https://www.ruantiengo.com"
    }
};