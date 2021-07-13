import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

import Contents from './pages/contents';
import Detail from './pages/detail';
import Home from './pages/home';
import Mercado from './pages/mercado';
import Cadastro from './pages/cadastro';
import DetailsMercado from './pages/contents/detail-mercados';

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Contents" component={Contents} />
                <Stack.Screen name="Detail" component={Detail} />
                <Stack.Screen name="Mercado" component={Mercado} />
                <Stack.Screen name="Cadastro" component={Cadastro} />

                <Stack.Screen name="DetalhesMercado" component={DetailsMercado} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}