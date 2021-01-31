import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
// import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
// import {Feather} from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';

// import mapMarker from './src/images/map-marker.png';

import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700BoldExRenFont: Nunito_700Bold,
    Nunito_800ExtraBold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    // <View style={styles.container}>
    //   {/* <Text style={styles.title}>Olá NLW!</Text> */}
    //   {/* <StatusBar style="auto" /> */}
    //   <MapView
    //     provider={PROVIDER_GOOGLE}
    //     style={styles.map}
    //     initialRegion={{
    //       latitude: -12.9606042,
    //       longitude: -38.4744777,
    //       latitudeDelta: 0.008,
    //       longitudeDelta: 0.008,
    //     }}
    //   >
    //     <Marker
    //       icon={mapMarker}
    //       calloutAnchor={{
    //         x: 2.7,
    //         y: 0.8,
    //       }}
    //       coordinate={{
    //         latitude: -12.9606042,
    //         longitude: -38.4744777,
    //       }}
    //     >
    //       <Callout tooltip onPress={() => { alert('oi'); }}>
    //         <View style={styles.calloutContainer}>
    //           <Text style={styles.calloutText}>
    //             Orfanato Pimenta
    //           </Text>
    //         </View>


    //       </Callout>
    //     </Marker>
    //   </MapView>
    //   <View style={styles.footer}>
    //     <Text style={styles.footerText}>2 orfanatos encontrados</Text>
    //     <TouchableOpacity style={styles.botaoCriarOrfanato} onPress={()=>{}}>
    //       <Feather name="plus" size={20} color="#fff"/>
    //     </TouchableOpacity>
    //   </View>
    // </View>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>

  );
}

//Diplay flex é automatico e flex-direction: 'column'
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#121214',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
//   // title: {
//   //   color: '#fff',
//   //   fontSize: 24,
//   //   fontWeight: 'bold'
//   // }
//   map: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height
//   },
//   calloutContainer: {
//     width: 160,
//     height: 46,
//     paddingHorizontal: 16,
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     borderRadius: 16,
//     justifyContent: 'center',

//   },
//   calloutText: {
//     color: '#0089a5',
//     fontSize: 14,
//     fontFamily: 'nunito700',
//   },
//   footer: {
//     position: "absolute",
//     left: 24,
//     right: 24,
//     bottom: 32,

//     backgroundColor: '#fff',
//     borderRadius: 20,
//     height: 56,
//     paddingLeft: 24,

//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',

//     elevation: 3,
//   },
//   footerText: {
//     fontFamily: 'nunito700',
//     color: '#8fa7b3',
//   },
//   botaoCriarOrfanato: {
//     width: 56,
//     height: 56,
//     backgroundColor: '#15c3d6',
//     borderRadius: 20,

//     justifyContent: 'center',
//     alignItems: 'center'
//   }

// });
