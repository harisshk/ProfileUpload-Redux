import React from 'react'
import {Image, View ,Text,TouchableOpacity,StyleSheet, TextInput} from 'react-native';
import{useSelector,useDispatch} from 'react-redux';
import {addProfile} from './actions/action'
import Feather from 'react-native-vector-icons/Feather';
import * as ImagePicker from 'react-native-image-picker'
export default function Profile(props){
  const data = useSelector (state =>state
    )
  const dispatch = useDispatch ()
  console.log('------------',data,'------------')
    
  const handlePhoto = () =>{
    const options ={}
    ImagePicker.launchImageLibrary(options,Response => {
      if(Response.uri){
        setDatas({
          ...data,
          photo:Response
        })
      }
    })
  }
  const [datas,setDatas] =React.useState({
    username:'',
    age:'',
    email:'',
    photo:''
    
});
const usernameHandler =(val) =>{
  console.log('[][]',val)
  setDatas({
    ...data,
    username:val
  })
}

const ageHandler =(val) =>{
  console.log('[][]',val)
  setDatas({
    ...data,
    age:val
  })
}

const emailHandler =(val) =>{
  console.log('[][]',val)
  setDatas({
    ...data,
    email:val
  })
}

    return(
        <View style={styles.container} >
           <Text>{datas.photo && 
             <Image source={{uri:datas.photo.uri}} style={{width:300,height:300}} />
           
          } </Text>
           <TouchableOpacity style={styles.upbutton} onPress={()=>{handlePhoto()}}>
             <Text>Upload Photo</Text>
           </TouchableOpacity>
            <TextInput  placeholder={data.username} onChangeText={(val) => {usernameHandler(val)}} style={styles.input} >

            </TextInput >
            <TextInput placeholder={data.age} onChangeText={(val) => {ageHandler(val)}} style={styles.input} >

            </TextInput >
            <TextInput placeholder={data.email} onChangeText={(val) => {emailHandler(val)}} style={styles.input} >

            </TextInput >
            <TouchableOpacity style={styles.button} onPress={(val)=>{dispatch(addProfile(datas))}}>
              <Text>Submit</Text>
            </TouchableOpacity>
           
            

        </View>
    )
}
const styles = StyleSheet.create({
  input:{
    borderWidth:5,
   borderColor:'#00ff00',
    
    borderRadius:50,
    paddingLeft:20,
    width:"90%"
    
},
    container:{
        marginTop:30,
        alignItems:'center',
        
    },
    button:{
      marginTop:40,
      height:50,
      backgroundColor:"#52A7E7",
      width:"90%",
      justifyContent:"center",
      alignItems:'center',
      borderRadius:30
  },
  upbutton:{
    margin:40,
    height:50,
    backgroundColor:"#52A7E7",
    width:"40%",
    justifyContent:"center",
    alignItems:'center',
    borderRadius:30
}

})
