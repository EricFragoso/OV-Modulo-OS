import React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export function MenuHamburger() {
	return (
		<TouchableOpacity>
			<View>
				<Icon
					name={"menu"}
					size={32}
				/>
			</View>
		</TouchableOpacity>
	);
}
