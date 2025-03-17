import axios from "axios"

const commonApi = async (httpMethod , url, reqBody)=>{
    let reqConfig={
      method :httpMethod,
      url : url,
      data : reqBody,
      headers:{
        "content-Type":"application/json"
      }
    }
    return await axios (reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
}
export default commonApi
