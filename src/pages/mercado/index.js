import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

import { useNavigation, useRoute } from '@react-navigation/native';

export default function Mercado() {
    const route = useRoute();
    const { login, nome_mercado } = route.params;

    return (
        <View style={styles.container}>
            <Text>{login} - {nome_mercado}</Text>
        </View>
    );
}