export const getNewsReport = async (url) => {
    if(!url || url === undefined){
        console.error("url invalida")
        return null;
    }
    console.log("entra por services.js", url)
    try {
        const requestUrl = {
            "url": url
        }
        console.log("hace la peticion")
        const response = await fetch(`https://mediamirrorbackend-production.up.railway.app/scrape`, {
            method: "POST",
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify(requestUrl)
        })
        if(response.status === 400){
            const data = await response.json()
            return data.error
        }else if(response.status === 200){
            const data = await response.json()
            return data
        }
    } catch (error) {
        console.error(error.message)
    }
    
}