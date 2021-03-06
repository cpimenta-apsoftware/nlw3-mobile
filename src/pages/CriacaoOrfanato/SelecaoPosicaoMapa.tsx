import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { MapEvent, Marker } from 'react-native-maps';

import mapMarkerImg from '../../images/map-marker.png';

export default function SelecaoPosicaoMapa() {
  const navigation = useNavigation();
  const [posicao, definirPosicao] = useState({ latitude: 0, longitude: 0 });

  function handleNextStep() {
    navigation.navigate('DadoOrfanato', {posicao});
  }

  function tratarSelecaoPosicaoMapa(aoEvento: MapEvent) {
    definirPosicao(aoEvento.nativeEvent.coordinate);
  }

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: -12.969449,
          longitude: -38.489051,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        style={styles.mapStyle}
        onPress={tratarSelecaoPosicaoMapa}
      >
        {posicao.latitude !== 0 && (
          <Marker
            icon={mapMarkerImg}
            coordinate={{ latitude: posicao.latitude, longitude: posicao.longitude }}
          />
        )}
      </MapView>

      {posicao.latitude !== 0 && (
        <RectButton style={styles.nextButton} onPress={handleNextStep}>
          <Text style={styles.nextButtonText}>Próximo</Text>
        </RectButton>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },

  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,

    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 40,
  },

  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  }
})