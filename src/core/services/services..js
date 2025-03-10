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
        const response = await fetch(`http://localhost:3000/scrape`, {
            method: "POST",
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify(requestUrl)
        })
        const data = await response.json()
        const dataParsed = JSON.parse(data.content)
        return dataParsed
    } catch (error) {
        console.error(error.message)
    }
    
}