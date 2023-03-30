import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react';

import { Home } from '../screens/home';
import { ListOS } from '../screens/listOS';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator initialRouteName='login'>
            <Screen
                name="login"
                component={Home}
            />
            <Screen
                name="listos"
                component={ListOS}
            />
        </Navigator>
    );
}