import {ADDPROFILE} from './actionTypes'

export const addProfile = (value) =>(
 
    {
        type:ADDPROFILE,
        username:value.username,
        age:value.age,
        email:value.email,
        photo:value.photo
        
    }
)
