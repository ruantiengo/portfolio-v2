export const scrollSmooth = (e: any, link: string): void => { 
    if(link !== '/blog'){
        const query = document.querySelector(link)

        if(query){
            e.preventDefault()
            query.scrollIntoView({
            behavior: "smooth",
            })
        }
    }
    
}