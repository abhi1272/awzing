const baseUrl =  "https://api.bidzbay.com/api/ps/v1"

export const fetcher = async (workUrl)=>{
 try {
        const response = await fetch(baseUrl + workUrl )
        const responseData = await response.json()
        return responseData
 } catch (error) {
        console.log(error)
 }
       
}