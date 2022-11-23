export const getLanguageName: (locale: any, t: any) => string = (locale: any, t:any) => {
    switch(locale){
        case 'pt-BR': {
            return (t("header:portuguese"))
        }
        case 'en-US': {
            return (t("header:english"))
        }
        case 'it-IT': {
            return (t("header:italian"))
        }
    }
}