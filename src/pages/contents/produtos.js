import React, {useState} from 'react';
import { View, Button, TouchableOpacity, FlatList, Text, StyleSheet, Dimensions } from 'react-native';

import api from '../../services/api';

export default function Produtos() {
  const [contents, setContents] = useState();

  async function getContents() {
    const response = await api.get('contents?nome_produto=').
      then(function (response) {
        setContents(response.data)
        console.log(contents);
      })
      .catch(function (error) {
        alert("Por favor verifique sua conexão com internet.");
      });
      dados = true;
  }

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text>Lista</Text>
        <TouchableOpacity onPress={getContents}>
          <Text>Listar</Text>
        </TouchableOpacity>
        <FlatList data={contents}
          renderItem={({ item }) =>
            <Text>{item.nome_produto}</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  }
});