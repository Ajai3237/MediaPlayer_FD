import serverUrl from "./ServerUrl";
import commonApi from "./CommonApi";




// API call for upload video

 const uploadeVideo = async(reqBody)=>{
   return await commonApi('POST',`${serverUrl}/videos`,reqBody)
   
}
export default uploadeVideo
//Get all video api call

 export const getALLvideo = async ()=>{
    return await commonApi('GET', `${serverUrl}/videos`,"")
}

// Delete video 

export const deleteVideo = async (id)=>{
   return await commonApi('DELETE',`${serverUrl}/videos/${id}`)
}

// Add to history

 export const addHistory = async (data)=>{
   return await commonApi ('POST' , `${serverUrl}/history` , data)
 }

 // Get history
 export const Gethistory = async ()=>{
   return await commonApi('GET', `${serverUrl}/history`,"")
}

// delete history 
 
export const  deletewatchHIstory = async (id)=>{
   return await commonApi('DELETE',`${serverUrl}/history/${id}`,{})
}


// Add catagory

export const addCatagory = async(data)=>{
   return await commonApi('POST', `${serverUrl}/categories`,data)
}

// get all category

export const getallcategorys = async ()=>{
   return await commonApi ('GET',`${serverUrl}/categories`,"")
}

// delete category 
 
export const deleteVideocategory = async(data)=>{
   return await commonApi('DELETE',`${serverUrl}/categories/${data}`,{})
}

//get
export const getVideoDetailsByid = async (id) => {
   return await commonApi('GET', `${serverUrl}/videos/${id}`, {});
};

//update the catecory

export const updatacategory = async(id , data)=>{
   return await commonApi('PUT', `${serverUrl}/categories/${id}`,data)

}







