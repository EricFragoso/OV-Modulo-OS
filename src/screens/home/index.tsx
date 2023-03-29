import { Text, View, TextInput,  } from 'react-native'
import { styles } from './styles'

import { Button } from '../../components/button'
 
export function Home() {

  function handleUserLogin(codigo: string) {
    console.log(`Login usercode: ${codigo}`);
    
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
    placeholder='Insira o código'
    placeholderTextColor={'#000'}
    />
    </View>

    <Button text='Enviar' callFunc={() => handleUserLogin('123')} />

  </View>
 )
}

