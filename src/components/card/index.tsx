import { View, Text,TouchableOpacity } from 'react-native'
import { styles } from './styles'

type Props = {
    numberOS: string
    company: string
    name: string
    callFunc: () => void
  }

export function Card() {
    return (
        <View>
            <TouchableOpacity style={styles.card} >
                <View style={styles.firstColumn}>
                    <Text style={styles.cardHeader}>
                      OS1
                    </Text>
                    <Text style={styles.cardText}>
                      Empresa 1
                    </Text>
                </View>
                <View style={styles.secondColumn}>
                    <Text style={styles.cardText}>
                      Demandante 1
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}