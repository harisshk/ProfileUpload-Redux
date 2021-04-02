import {ADDPROFILE} from './../actions/actionTypes'

const initialState ={
    username:'hk',
    age:'20',
    email:'hari@gmail.com',
    photo:'{"fileName": "rn_image_picker_lib_temp_4c92927f-1d8a-4f9e-b67f-11288979ebb6.jpg", "fileSize": 2491871, "height": 3472, "type": "image/jpeg", "uri": "https://lh3.googleusercontent.com/proxy/uM0j1dq9QoMrr1cqgVafx78PFO1hIuj5bWFV-NrzNwApFYnJG3HQ37i2df3PNUObfZ-Gch7HJFg7OAK_BT48vKpLDhxq0DyUc5ZzXt9nPXrA5lX3GEh3Pb_n-aYh", "width": 4624}'
}

const ProfileReducer = (state= initialState,action)=> {
    switch(action.type){
        case ADDPROFILE:
            return {
                ...state,
                username:action.username,
                age:action.age,
                email:action.email,
                photo:action.photo
            }
        
        default:
            return state
}
}

export default ProfileReducer