import React, { useState, useEffect } from 'react';
import { View, Button, Image, TouchableOpacity, FlatList, Text, StyleSheet, Dimensions } from 'react-native';

import api from '../../services/api';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function Mercados({ nome_usuario, endereco }) {
    const [mercados, setMercados] = useState(null);
    const [cep, setCep] = useState(endereco.cep_usuario);

    const [detalhes, setDetalhes] = useState(false);

    useEffect(() => {
        if (mercados != null) {
        } else {
            (async () => {
                await api.get('mercados?cep=' + cep).
                    then(function (response) {
                        setMercados(response.data);
                    })
                    .catch(function (error) {
                        alert("Por favor verifique sua conexão com internet.");
                    })
            })();
        }
    }, [mercados])

    const navigation = useNavigation();

    function gotToDetailsMarket(item){
        navigation.navigate('DetalhesMercado', item)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLogo}>
                    <Image style={styles.logo} source={require('../../assets/logo.png')} />
                </View>
                <View style={styles.headerDados}>
                    <Text style={{ fontSize: 20, fontWeight: '700' }}>Bem Vindo!</Text>
                    <Text>Endereço: {endereco.rua_usuario}, {endereco.numero_usuario}</Text>
                    <Text>Cidade: {endereco.cidade_usuario}, {endereco.uf_usuario}</Text>
                    <TouchableOpacity style={styles.trocaEndereco}>
                        <Text>Mudar endereço</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.headerCarrinho}>
                    <FontAwesome name="shopping-bag" size={16} color="#000000" />
                </View>
            </View>

            <View style={styles.filtros}>
                <TouchableOpacity style={styles.orderdarPor}>
                    <Text>Ordernar por</Text>
                </TouchableOpacity>
                <View style={styles.procurarMercado}>
                    <TextInput style={{ width: '80%' }} placeholder="Digite o nome do mercado" />
                    <FontAwesome style={{ width: '20%' }} name="search" size={10} color="#A9A9A9" />
                </View>
            </View>

            <View style={styles.container2}>
                <FlatList data={mercados}
                    scrollEnabled={false}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => gotToDetailsMarket(item)} style={styles.listaMercados}>
                            <Text style={styles.nome_mercado}>{item.nome_mercado}</Text>
                            <Text style={styles.endereco_mercado}>{item.rua}, {item.numero}</Text>
                        </TouchableOpacity>
                    }
                    keyExtractor={({id}, index) => id}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    //** Header */
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerLogo: {
        paddingLeft: 30,
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    headerDados: {
        width: '60%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    headerCarrinho: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 50,
        height: 90
    },
    trocaEndereco: {
        backgroundColor: "#F0F0F0",
        marginTop: 5,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2
    },

    /** Busca */
    filtros: {
        paddingTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 20
    },
    orderdarPor: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 15,
        borderRadius: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    procurarMercado: {
        width: '60%',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        height: 50
    },


    container: {
        paddingTop: 40,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    /** Lista de Mercados */
    container2: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: '100%',
    },
    menu: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        paddingVertical: 20
    },
    botaoMenu: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    listaMercados: {
        borderColor: '#d3d3d3',
        borderWidth: 1,
        width: Dimensions.get('window').width - 50,
        marginTop: 15,
        padding: 15
    },
    nome_mercado: {
        color: 'black',
        fontSize: 18
    },
    endereco_mercado: {
        color: '#808080',
        fontSize: 13
    },

    modalText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    },
    modalInput: {
        marginTop: 15,
        marginBottom: 15,
        borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 30,
        borderRadius: 3,
        width: 230,
        borderColor: '#d3d3d3'
    },
    modalButton: {
        alignItems: "center",
        backgroundColor: "white",
        paddingTop: 10,
        paddingBottom: 10,
        borderColor: '#808080',
        borderRadius: 8,
        borderWidth: 1,
        width: '40%',
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});