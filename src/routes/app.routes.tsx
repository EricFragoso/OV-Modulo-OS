import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { DetailAtivo } from "../screens/detailAtivo";
import { DetailOS } from "../screens/detailOS";

import { Home } from "../screens/home";
import { ListOS } from "../screens/listOS";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator
			initialRouteName="login"
			screenOptions={{ headerShown: false }}
		>
			<Screen
				name="login"
				component={Home}
			/>
			<Screen
				name="listos"
				component={ListOS}
			/>
			<Screen
				name="detailos"
				component={DetailOS}
			/>
			<Screen
				name="detailativo"
				component={DetailAtivo}
			/>
		</Navigator>
	);
}
