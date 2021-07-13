import React, { useState, useEffect } from 'react';
import { View, Button, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

import MapView from 'react-native-maps';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

import { useNavigation, useRoute } from '@react-navigation/native';
import { Marker, MapMarker } from 'react-native-maps';
import api from '../../services/api';

export default function Mapa() {
  const route = useRoute();
  const { latitude, longitude, latitudeDelta, longitudeDelta } = route.params;
  const [mercados, setMercados] = useState(null);
  const [dadosMercados, setDadosMercados] = useState(null);
  const [coordenadas, setCoordenadas] = useState(null);

  useEffect(() => {
    if (mercados == null) {
      (async () => {
        await api.get('mercados')
          .then(function (response) {
            setMercados(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
        //setMercados(getMercados.data);
        //console.log(mercados);
      })();
    } else {
      console.log("passei");
      console.log(mercados);
      mercados.forEach(element => {
        getCoordenadas(element);
      });
    }

  }, [mercados]);

  const [markers, setMarkers] = useState(
    [{
      id: 0,
      title: "Você",
      latlong: {
        latitude: latitude,
        longitude: longitude
      }
    }]);
  const [auxiliar, setAuxiliar] = useState(null);

  function getCoordenadas(element) {
    setTimeout(async function () {
      let coordenada = await Location.geocodeAsync(element.rua + ", " + element.numero + ", " + element.cidade + ", " + element.uf);
      //console.log(element.nome_mercado);
      let obj = {
        id: element.id,
        title: element.nome_mercado,
        latlong: {
          latitude: coordenada[0].latitude,
          longitude: coordenada[0].longitude
        }
      }
      setMarkers([...markers, obj]);
    }, 1000);
    
  }

  return (
    <View style={styles.container}>

      <View style={styles.container2}>
        <View style={styles.tituloView}>

          <Button onPress={() => console.log(markers)} title="listar" />

          <Text style={styles.tituloTitle}>Aqui você pode vizualizar os supermercados da sua região.</Text>
          <Text style={styles.tituloConteudo}>Para saber mais informação basta clicar e será redirecionado!</Text>
        </View>
        <MapView style={styles.mapStyle}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} >
          {markers.map(marker => (<MapView.Marker
            key={marker.id}
            coordinate={marker.latlong}
            title={marker.title}
          />))}
        </MapView>
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
    justifyContent: 'flex-end',
  },
  tituloView: {
    width: Dimensions.get('window').width,
    height: '30%',
  },
  tituloTitle: {
    textAlign: 'center',
    fontFamily: 'Helvetica',
    paddingHorizontal: 20,
    fontSize: 20,
    fontWeight: '400',
    paddingTop: 20
  },
  tituloConteudo: {
    textAlign: 'center',
    fontFamily: 'Helvetica',
    paddingHorizontal: 20,
    fontSize: 15,
    paddingTop: 20
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: '70%',
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