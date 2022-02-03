import React, { useState } from 'react';
import { Text, View, Button, TextInput, TouchableOpacity, Image, Picker } from 'react-native';
import MaskInput from 'react-native-mask-input';
import api from '../../services/api';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';

export default function Cadastro() {
    const [nome_mercado, setNome_mercado] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [cep, setCep] = useState('');

    const viacep = axios.create({
        baseURL: 'https://viacep.com.br/ws/'
    })

    async function getAddress(cep) {
        const response = await viacep.get(`${cep.replace('-', '')}/json/`)
            .then(function (response) {
                console.log(response)
                setCidade(response.data.localidade)
                setUf(response.data.uf)
                setRua(response.data.logradouro)
                //console.log(response.data.nome_mercado);
            }).catch(function (error) {
                //alert("Login não encontrado, tente novamente.");
            });
    }

    async function createMarket() {
        const response = await api.post('mercados', {
            nome_mercado: nome_mercado, 
            cidade: cidade, 
            uf: uf, 
            rua: rua, 
            numero: numero, 
            cep: cep
        }).then(function (response) {
            console.log(response.data)
            alert("Seu código de acesso é: " + response.data);
            navigation.navigate('Mercado', {
                login: response.data.toSreing(),
                nome_mercado: nome_mercado
            })
        }).catch(function (error) {
            alert("Login não encontrado, tente novamente.");
        });
    }

    const navigation = useNavigation();

    function cancel() {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20, fontWeight: '500'}}>Cadastro de Supermercado</Text>
            <TextInput style={styles.input} placeholder='Nome do Supermercado' value={nome_mercado} onChangeText={text => setNome_mercado(text)} />
            <MaskInput
                style={styles.input}
                placeholder='CEP'
                value={cep}
                onChangeText={text => getAddress(text) && setCep(text)}
                mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
            />
            <TextInput style={styles.input} placeholder='Cidade' value={cidade} onChangeText={text => setCidade(text)} />

            <TextInput style={styles.input} placeholder='Estado' value={uf} onChangeText={text => setUf(text)} />
            <TextInput style={styles.input} placeholder='Nome da Rua' value={rua} onChangeText={text => setRua(text)} />
            <TextInput style={styles.input} placeholder='Número' value={numero} onChangeText={text => setNumero(text)} />

            <View style={{width: '80%', flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', marginVertical: 10}}>
                <TouchableOpacity style={styles.btn} onPress={createMarket}>
                    <Text style={{ color: '#ff8c00' }}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2} onPress={cancel}>
                    <Text style={{ color: '#000000' }}>Cancelar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}