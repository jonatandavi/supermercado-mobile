import React, { useState } from 'react';
import { Text, View, Button, TextInput, TouchableOpacity, Image, Picker } from 'react-native';
import MaskInput from 'react-native-mask-input';
import api from '../../services/api';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';

export default function CadastroUser(){
    const [nome_usuario, setNome_usuario] = useState('');
    const [senha_usuario, setSenha_usuario] = useState('');
    const [email_usuario, setEmail_usuario] = useState('');
    const [telefone_usuario, setTelefone_usuario] = useState('');

    const navigation = useNavigation();

    function cancel() {
        navigation.navigate('Home');
    }

    async function createUser() {
        const response = await api.post('cadastrar/user', {
            nome_usuario: nome_usuario, 
            senha_usuario: senha_usuario, 
            email_usuario: email_usuario, 
            telefone_usuario: telefone_usuario
        }).then(function (response) {
            console.log(response.data)
            navigation.navigate('Contents', {
                nome_usuario: response.data.nome_usuario,
                email_usuario: "",
                endereco: ""
            })
        }).catch(function (error) {
            alert("Login não encontrado, tente novamente.");
        });
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20, fontWeight: '500'}}>Cadastro de Usuário</Text>
            <TextInput style={styles.input} placeholder='Nome' value={nome_usuario} onChangeText={text => setNome_usuario(text)} />
            <TextInput style={styles.input} placeholder='E-mail' value={email_usuario} keyboardType="email-address" onChangeText={text => setEmail_usuario(text)} />
            <TextInput style={styles.input} placeholder='Senha' textContentType="password" value={senha_usuario} onChangeText={text => setSenha_usuario(text)} />
            {/*<TextInput style={styles.input} placeholder='Telefone' value={telefone_usuario} onChangeText={text => setTelefone_usuario(text)} />*/}
            
            <MaskInput
                style={styles.input}
                placeholder='Telefone'
                value={telefone_usuario}
                onChangeText={text => setTelefone_usuario(text)}
                mask={['(',/\d/, /\d/, ') ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            />

            <View style={{width: '80%', flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', marginVertical: 10}}>
                <TouchableOpacity style={styles.btn} onPress={createUser}>
                    <Text style={{ color: '#ff8c00' }}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2} onPress={cancel}>
                    <Text style={{ color: '#000000' }}>Cancelar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}