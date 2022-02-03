import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image, Dimensions, Platform } from 'react-native';

import styles from './styles';
import api from '../../services/api';

import Constants from 'expo-constants';
import * as Location from 'expo-location';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const [loginMKTbool, setLoginMTKbool] = useState(false);
    const [loginUSERbool, setLoginUSERbool] = useState(false);
    const [login, setLogin] = useState('');
    const [email_usuario, setEmail] = useState('');
    const [senha_usuario, setSenha] = useState('');

    /** Localização */
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [latitudeDelta, setLatitudeDelta] = useState(null);
    const [longitudeDelta, setLongitudeDelta] = useState(null);
    useEffect(() => {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            setErrorMsg(
                'Oops, this will not work on Sketch in an Android emulator. Try it on your device!'
            );
        } else {
            (async () => {
                let { status } = await Location.requestPermissionsAsync();
                if (status !== 'granted') {
                    setErrorMsg('Permission to access location was denied');
                }

                let location = await Location.getCurrentPositionAsync({});
                setLocation(location);
                setLatitude(location.coords.latitude);
                setLongitude(location.coords.longitude);
            })();
        }
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
        //console.log(location);
    }
    /**Fim */

    const navigation = useNavigation();

    function navigateToContents() {
        navigation.navigate('Contents', {
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: latitudeDelta,
            longitudeDelta: longitudeDelta,
        });
        setLoginMTKbool(false);
    }

    async function logar() {
        //console.log(login);
        const response = await api.post('session/login/mercado', {
            login: login
        }).then(function (response) {
            navigation.navigate('Mercado', {
                login: login,
                nome_mercado: response.data.nome_mercado
            })
            //console.log(response.data.nome_mercado);
        }).catch(function (error) {
            alert("Login não encontrado, tente novamente.");
        });
    }

    async function loginUSER() {
        const response = await api.post('session/login/usuario', {
            email_usuario: email_usuario,
            senha_usuario: senha_usuario
        }).then(function (response) {
            console.log(response.data)
            const nome_usuario = response.data.nome_usuario;
            //const endereco = response.data.endereco;
            navigation.navigate('Contents', {
                nome_usuario: nome_usuario,
                email_usuario: "",
                endereco: ""
            })
        }).catch(function (error) {
            alert("Login não encontrado, tente novamente.")
        })
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/logo.png')} />
            <View>
                <Text style={styles.txtWelcome}>Quem é você?</Text>
            </View>

            {loginUSERbool &&
                <View style={{ alignItems: 'center' }}>
                    <TextInput style={styles.inpLogin} placeholder={'Digite seu e-mail'} keyboardType="email-address" textContentType="emailAddress" value={email_usuario} onChangeText={text => setEmail(text)} />
                    <TextInput style={styles.inpLogin} placeholder={'Digite sua senha'} textContentType="password" value={senha_usuario} onChangeText={text => setSenha(text)} />
                    <View style={styles.btnsLogin}>
                        <TouchableOpacity style={styles.btnEntrar} onPress={loginUSER}>
                            <Text style={{color: '#ff8c00'}}>Entrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnCadastrar} onPress={() => navigation.navigate('CadastroUser')}>
                            <Text>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>}
            {loginMKTbool &&

                <View style={{ alignItems: 'center' }}>
                    <TextInput style={styles.inpLogin} placeholder={'Digite se código de login'} value={login} onChangeText={text => setLogin(text)} />
                    <View style={styles.btnsLogin}>
                        <TouchableOpacity style={styles.btnEntrar} onPress={logar}>
                            <Text style={{color: '#ff8c00'}}>Entrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnCadastrar} onPress={() => navigation.navigate('CadastroMercado')}>
                            <Text>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>}

            <TouchableOpacity style={styles.btnMercado} onPress={() => {
                setLoginMTKbool(true);
                setLoginUSERbool(false);
            }}>
                <Text style={styles.txtBtn}>Sou um Mercado</Text>
            </TouchableOpacity>


            <View style={{ margin: 8 }} />
            <TouchableOpacity style={styles.btnConsumidor} onPress={() => {
                setLoginMTKbool(false);
                setLoginUSERbool(true);
            }}>
                <Text style={styles.txtBtn}>Sou um Consumidor</Text>
            </TouchableOpacity>

        </View>
    );
}