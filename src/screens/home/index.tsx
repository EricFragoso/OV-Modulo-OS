import React, { useState } from 'react'
import { Text, View, TextInput, Alert  } from 'react-native'
import { styles } from './styles'

import { Button } from '../../components/button'
 
export function Home() {

  const [userCode, setUserCode] = useState('')

  function handleUserLogin(codigo: string) {
    if(codigo == ''){
      return Alert.alert("Atenção", "Código em branco")
    } else if(codigo == '00'){
      return Alert.alert("Atenção", "Código inválido")
    }

    console.log(codigo);
    
  }

 return(
  
  <View 
  style={styles.container}>
    
    <View style={styles.header}>

    <Text 
    style={styles.companyName}>
      Overview
    </Text>
      </View>
    
    <View style={styles.input}>
    <Text 
    style={styles.inputText}>
      Código do usuário
    </Text>
    
    <TextInput 
    style={styles.inputField}
    keyboardType='numeric'
    placeholder='Insira o código'
    placeholderTextColor={'#000'}
    onChangeText={inputText => setUserCode(inputText)}
    />
    </View>

    <Button text='Enviar' callFunc={() => handleUserLogin(userCode)} />

  </View>
 )
}

