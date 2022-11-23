import useTranslation from "next-translate/useTranslation";

const { t } = useTranslation()
export const AppConfig = {
    site_name: "Ruan Tiengo",
    title: "Ruan Tiengo",
    description: t("meta:description"),
    canonical: "https://www.ruantiengo.com",
};