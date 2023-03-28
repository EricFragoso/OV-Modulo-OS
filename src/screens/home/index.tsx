import { Text, View, TextInput } from 'react-native'
import { styles } from './styles'
 
export function Home() {
 return(
  <View style={styles.container}>
    <Text style={styles.companyName}>Overview</Text>
    <Text>Teste Aplicativo</Text>
    <TextInput style={styles.input}/>
  </View>
 )
}

