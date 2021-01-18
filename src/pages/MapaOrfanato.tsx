import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import mapMarker from '../images/map-marker.png';
import { RectButton } from 'react-native-gesture-handler';
import api from '../services/api';

interface Orfanato {
  id: number;
  latitude: number;
  longitude: number;
  nome: string;
};

export default function MapaOrfanato() {
  const [orfanatos, definirOrfanatos] = useState<Orfanato[]>([]);
  const navegacao = useNavigation();

  //console.log(orfanatos);

  //Executado quando a tela é aberta
  // useEffect(() => {
  //   api.get('orfanatos').then(resposta => {
  //     definirOrfanatos(resposta.data);
  //   });
  // }, []);

  //Executado sempre que a tela está em foco
  useFocusEffect(() => {
    api.get('orfanatos').then(resposta => {
      definirOrfanatos(resposta.data);
    });
  });

  function tratarNavegacaoDetalheOrfanato(id: number) {
    navegacao.navigate('DetalheOrfanato', {id});
  }

  function tratarNavegacaoCriacaoOrfanato() {
    navegacao.navigate('SelecaoPosicaoMapa');
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}        
        initialRegion={{
          latitude: -12.969449,
          longitude: -38.489051,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        {orfanatos.map(orfanato => {
          return (
            <Marker
              key={orfanato.id}
              icon={mapMarker}
              calloutAnchor={{
                x: 2.7,
                y: 0.8,
              }}
              coordinate={{
                latitude: orfanato.latitude,
                longitude: orfanato.longitude,
              }}
            >
              <Callout tooltip onPress={
                // () => { alert('oi'); }
                () => tratarNavegacaoDetalheOrfanato(orfanato.id)
              }>
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutText}>
                    {orfanato.nome}
                  </Text>
                </View>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>{orfanatos.length} orfanatos encontrados</Text>
        {/* <TouchableOpacity style={styles.botaoCriarOrfanato} onPress={tratarNavegacaoCriacaoOrfanato}>
          <Feather name="plus" size={20} color="#fff"/>
        </TouchableOpacity> */}
        <RectButton style={styles.botaoCriarOrfanato} onPress={tratarNavegacaoCriacaoOrfanato}>
          <Feather name="plus" size={20} color="#fff" />
        </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',

  },
  calloutText: {
    color: '#0089a5',
    fontSize: 14,
    fontFamily: 'Nunito_700BoldExRenFont',
  },
  footer: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: '#fff',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3,
  },
  footerText: {
    fontFamily: 'Nunito_700BoldExRenFont',
    color: '#8fa7b3',
  },
  botaoCriarOrfanato: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center'
  }
});