import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import {useSelector} from 'react-redux'
export default function ProfileViewer(){
    const data = useSelector (state =>state
        )
    return(
        <View style={styles.container}>
            <Text>{data.photo && 
             <Image source={{uri:data.photo.uri}} style={{width:300,height:300}} />
           
          } </Text>
            <View style={styles.line}>
                <Text style={styles.text}>Name: </Text>
            <Text style={styles.text}>{data.username}</Text>
            </View>
            <View style={styles.line}>
                <Text style={styles.text}>Age: </Text>
            <Text style={styles.text}>{data.age}</Text>
            </View>
            <View style={styles.line}>
                <Text style={styles.text}>Email: </Text>
            <Text style={styles.text}>{data.email}</Text>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        paddingLeft:10,
       

    },
    text:{
        fontSize:30
    },
    line:{
        flexDirection:'row',
      
    }
})