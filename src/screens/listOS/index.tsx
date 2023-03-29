import { Text, View, FlatList} from "react-native";
import { styles } from "./styles";

export function ListOS() {
    return(
        <View 
        style={styles.container}
        >
            <View style={styles.header}>
                <Text 
                style={styles.headerText}>
                    Lista de OS
                </Text>
            </View>
            <View>
                
            </View>
        </View>
    )
}