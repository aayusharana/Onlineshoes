import{get} from "../axios/Fetcher"

export const hotProduct = async ()=>{
    const response = await get("products?limit=5")
    return response;  //return data from response
}
export const trendingVender = async ()=>{
    const response = await get("products?limit=10")
    return response;  //return data from response
}