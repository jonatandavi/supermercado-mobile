import React, { useState, useEffect } from 'react';
import { View, Button, Image, TouchableOpacity, FlatList, Text, StyleSheet, Dimensions } from 'react-native';

import api from '../../../services/api';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';

import { FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';
import styles from './styles';


export default function DetailsMercado() {
    const route = useRoute();
    const mercado = route.params;
    const navigation = useNavigation();

    return (
        <View styles={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity style={styles.arrowTopBar} onPress={() => navigation.navigate('Contents')}>
                    <FontAwesome name="arrow-left" size={25} color="#000000" />
                </TouchableOpacity>
                <View style={styles.nomeTopBar}>
                    <Image style={{ width: 70, height: 70 }} source={require('../../../assets/escrita-preto.png')} />
                </View>

                <View style={styles.cidadeTopBar}>
                    <Text style={{ fontSize: 18, fontWeight: '700' }}>{mercado.cidade}, {mercado.uf} <MaterialIcons name="place" size={15} color="#000000" /></Text>
                </View>
            </View>

            <View styles={styles.header}>
                <View style={styles.infoHeader}>
                    <Text style={{ fontSize: 18, fontWeight: '700' }}>{mercado.nome_mercado}</Text>
                    <Text style={{}}>{mercado.rua}, {mercado.numero}, {mercado.cidade} - {mercado.uf}</Text>
                </View>

                <View style={styles.btnsHeader}>
                    <TouchableOpacity style={styles.btnHeader}>
                        <Text><MaterialIcons name="motorcycle" size={16} color="#000000" /> Entrega</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnHeader}>
                        <Text><MaterialIcons name="account-balance-wallet" size={16} color="#000000" /> Pagamento</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnHeader}>
                        <Text><FontAwesome name="plus" size={16} color="#000000" /> Mais</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.contentsMercado}>
                <View style={styles.filtros}>
                    <TouchableOpacity style={styles.btnFiltro}>
                        <Text><Entypo name="select-arrows" size={15} color="#A9A9A9" /> Categorias</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnFiltro}>
                        <Text><FontAwesome name="barcode" size={15} color="#A9A9A9" /> Código de barras</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.listaContents}>

                </View>
            </View>
        </View>
    );
}