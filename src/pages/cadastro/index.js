import React, { useState } from 'react';
import { Text, View, Button, TextInput, TouchableOpacity, Image, Picker } from 'react-native';

import styles from './styles';

export default function Cadastro() {
    const [nome_mercado, setNome_mercado] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [cep, setCep] = useState('');

    return (
        <View style={styles.container}>
            <Text>Digite o nome do supermercado:</Text>
            <TextInput placeholder='Nome' value={nome_mercado} onChangeText={text => setNome_mercado(text)} />
            <Text>Digite a cidade do supermercado:</Text>
            <TextInput placeholder='Cidade' value={cidade} onChangeText={text => setCidade(text)} />
            <Text>Selecione o estado:</Text>
            <Picker
                selectedValue={uf}
                enabled={true}
                style={{ height: 10, width: 50 }}
                onValueChange={(itemValue, itemIndex) => setUf(itemValue)}>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
            <Text>Digite o CEP do supermercado:</Text>
            <TextInput placeholder='CEP' value={rua} onChangeText={text => setRua(text)} />
            <Text>Digite a rua do supermercado:</Text>
            <TextInput placeholder='Nome do Supermercado' value={numero} onChangeText={text => setNumero(text)} />
            <Text>Digite o número do supermercado:</Text>
            <TextInput placeholder='Número' value={cep} onChangeText={text => setCep(text)} />
        </View>
    );
}