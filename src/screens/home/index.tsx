import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
 
export function Home() {
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

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>
        Entrar
      </Text>
    </TouchableOpacity>

  </View>
 )
}

