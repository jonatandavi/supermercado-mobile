import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';

import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import Modal, { ModalContent } from 'react-native-modals';

import styles from './styles';
import Mercados from './mercados';
import Produtos from './produtos';

import { useNavigation, useRoute } from '@react-navigation/native';

export default function Contents() {
    const [mapa, setMapa] = useState(true);
    const [mercados, setMercados] = useState(true);
    const [produtos, setProdutos] = useState(false);
    const [pedidos, setPedidos] = useState(false);
    const [perfil, setPerfil] = useState(false);

    const [cep, setCep] = useState();
    const [modal, setModal] = useState(false);

    const route = useRoute();

    const {nome_usuario, email_usuario, endereco} = route.params;

    const navigation = useNavigation();

    function gotHome(){
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>

            <Modal
                visible={modal}
                onTouchOutside={() => {
                    console.log("cliquei fora");
                }}
            >
                <ModalContent style={{ alignItems: 'center' }}>
                    <Text style={styles.modalText}>Digite abaixo seu CEP: </Text>
                    <TextInput style={styles.modalInput} placeholder={'CEP'} value={cep} onChangeText={text => setCep(text)} />

                    <View style={styles.menu}>
                        <TouchableOpacity style={styles.modalButton} onPress={() => {
                            setMercados(true);
                            setProdutos(false);
                            setPedidos(false);
                            setPerfil(false);
                        }}>
                            <Text>Enviar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={gotHome}>
                            <Text>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </ModalContent>
            </Modal>

            {mercados &&
                <Mercados nome_usuario={nome_usuario} endereco={endereco} />
            }
            {produtos &&
                <Produtos />
            }
            <View style={styles.menu}>
                <TouchableOpacity style={styles.botaoMenu} onPress={() => {
                    setMercados(true);
                    setProdutos(false);
                    setPedidos(false);
                    setPerfil(false);
                }}>
                    {mercados && <View style={styles.menuItem}>
                        <FontAwesome name="shopping-cart" size={16} color="#ff8c00" />
                        <Text style={styles.txtMenuCol}>Home</Text>
                    </View>}
                    {!mercados && <View style={styles.menuItem}>
                        <FontAwesome name="shopping-cart" size={16} color="#000000" />
                        <Text style={styles.txtMenuPre}>Home</Text>
                    </View>}

                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoMenu} onPress={() => {
                    setMercados(false);
                    setProdutos(true);
                    setPedidos(false);
                    setPerfil(false);
                }}>
                    {produtos && <View style={styles.menuItem}>
                        <FontAwesome name="barcode" size={16} color="#ff8c00" />
                        <Text style={styles.txtMenuCol}>Produtos</Text>
                    </View>}
                    {!produtos && <View style={styles.menuItem}>
                        <FontAwesome name="barcode" size={16} color="#000000" />
                        <Text style={styles.txtMenuPre}>Produtos</Text>
                    </View>}
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoMenu} onPress={() => {
                    setMercados(false);
                    setProdutos(false);
                    setPedidos(true);
                    setPerfil(false);
                }}>
                    {pedidos && <View style={styles.menuItem}>
                        <FontAwesome name="shopping-bag" size={16} color="#ff8c00" />
                        <Text style={styles.txtMenuCol}>Pedidos</Text>
                    </View>}
                    {!pedidos && <View style={styles.menuItem}>
                        <FontAwesome name="shopping-bag" size={16} color="#000000" />
                        <Text style={styles.txtMenuPre}>Pedidos</Text>
                    </View>}
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoMenu} onPress={() => {
                    setMercados(false);
                    setProdutos(false);
                    setPedidos(false);
                    setPerfil(true);
                }}>
                    {perfil && <View style={styles.menuItem}>
                        <MaterialIcons name="person" size={16} color="#ff8c00" />
                        <Text style={styles.txtMenuCol}>Perfil</Text>
                    </View>}
                    {!perfil && <View style={styles.menuItem}>
                        <MaterialIcons name="person" size={16} color="#000000" />
                        <Text style={styles.txtMenuPre}>Perfil</Text>
                    </View>}
                </TouchableOpacity>
            </View>
        </View>
    );
}