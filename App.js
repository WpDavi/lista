import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View, StyleSheet, FlatList, TextInput } from 'react-native'
import uuid from 'react-native-uuid';

import lista from "./src/lista";
import Listaitem from './src/components/renderlist'

export default () => {
  
  const [ item, setItem] = useState('');
  const [ items, setItems] = useState(lista);

  const hendleSumit = ()=> {
    if(item.trim() != ''){
      items.push({
        id:uuid.v4(),
        task:item.trim(),
        done:false
       });
    }
    setItem('') 
  }

  const toggleDone = (index)=>{
    let newItems = [...items];
    newItems[index].done = !newItems[index].done;
    setItem(newItems)
  }

  return(
    <View>

      <TextInput style={styles.addtask}
      placeholder="Digite um novo item"
      value={item}
      onChangeText={e=>setItem(e)}
      onSubmitEditing={hendleSumit}
      returnKeyType='send'
      />

      <FlatList
      data={lista}
      renderItem={({item, index})=><Listaitem onPress={()=> toggleDone(index)} data={item} /> }
      keyExtractor={(item)=>item.id}      
      />
           
    </View>
  )
}

const styles = StyleSheet.create ({
  botao:{
    width: 20,
    height: 20,
    backgroundColor:'white',
    borderRadius:20,
    borderWidth:3    
  },

  addtask:{
    backgroundColor:'#eeee',
    fontSize:20,
    padding:10,
    color:'red'
    
    
  }


})






/*
<ScrollView style={{maxHeight: 400, width:300, backgroundColor:'red'}}>
      {
        lista.map((item, index) =>{
          return (            
            <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}
             key={index} >

              <Text style={{fontSize: 20, padding:20, color:'white'}}>
                 {(item.task)} </Text>   
                 <View style={styles.botao} ></View>

            </TouchableOpacity>
          )
        })
      }     
      </ScrollView> 
*/