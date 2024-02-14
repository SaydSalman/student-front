// register API 

import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverUrl"

export const registerAPI = async(user)=>{
 return await commonAPI("POST",`${SERVER_URL}/register`,user,"")
}

export const getDataAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/details`,"","")
}