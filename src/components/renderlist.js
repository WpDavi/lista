import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default ( props )=> {
    
    const trocar = (index) =>{
        alert(index)
    }
    
    
    return(
        <TouchableOpacity onPress={props.onPress}
        style={{flexDirection:'row', alignItems:'center'}}  >

         <Text style={{fontSize: 20, padding:20}}>
            {props.data.task} - {props.data.done.toString()} </Text>   

            <View style={styles.botao}
            done={props.data.done}>
                
            </View>
       </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create ({
    botao:{
      width: 20,
      height: 20,
      backgroundColor:` ${props=>props.done? '#ccc': '#fff' } `,
      borderRadius:20,
      borderWidth:3
      
    }
  })