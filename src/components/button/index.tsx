import { View, Text,TouchableOpacity } from 'react-native'
import { styles } from './styles'

type Props = {
  text: string
  callFunc: () => void
}

export function Button(props: Props) {
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={props.callFunc}>
              <Text style={styles.buttonText}>
                {props.text}
              </Text>
            </TouchableOpacity>
        </View>
    )
}