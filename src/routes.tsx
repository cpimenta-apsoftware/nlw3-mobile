import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import MapaOrfanato from './pages/MapaOrfanato';
import DetalheOrfanato from './pages/DetalheOrfanato';
import SelecaoPosicaoMapa from './pages/CriacaoOrfanato/SelecaoPosicaoMapa';
import DadoOrfanato from './pages/CriacaoOrfanato/DadoOrfanato';
import Cabecalho from './components/Cabecalho';

const {Navigator, Screen} = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
        <Screen 
          name="MapaOrfanato" 
          component={MapaOrfanato}
          // options={{
          //   headerShown: false
          // }}
        />
        <Screen 
          name="DetalheOrfanato" 
          component={DetalheOrfanato}          
          options={{
            headerShown: true,
            header: () => <Cabecalho exibirCancelar={false} titulo="Orfanato"/>
          }}
        />
        <Screen 
          name="SelecaoPosicaoMapa" 
          component={SelecaoPosicaoMapa}          
          options={{
            headerShown: true,
            header: () => <Cabecalho titulo="Selecione no mapa"/>
          }}
        />
        <Screen 
          name="DadoOrfanato" 
          component={DadoOrfanato}          
          options={{
            headerShown: true,
            header: () => <Cabecalho titulo="Informe os dados"/>
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}



