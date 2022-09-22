export async function fetchHandler(url){
    try{
        const response = await fetch(url);
        const data = await response.json();
        return await data;
    } catch (error) {
        console.log(error);
    }
}
