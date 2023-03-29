import { View, Text,TouchableOpacity } from 'react-native'
import { styles } from './styles'

type Props = {
    numberOS: number
    company: string
    name: string
    callFunc: () => void
  }

export function Card(props: Props) {
    return (
        <View>
            <TouchableOpacity style={styles.card} >
                <View style={styles.firstColumn}>
                    <Text style={styles.cardHeader}>
                      OS {props.numberOS}
                    </Text>
                    <Text style={styles.cardText}>
                      {props.company}                    
                    </Text>
                </View>
                <View style={styles.secondColumn}>
                    <Text style={styles.cardText}>
                      {props.name}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}