import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import MapaOrfanato from '../pages/MapaOrfanato';
import DetalheOrfanato from '../pages/DetalheOrfanato';
import SelecaoPosicaoMapa from '../pages/CriacaoOrfanato/SelecaoPosicaoMapa';
import DadoOrfanato from '../pages/CriacaoOrfanato/DadoOrfanato';
import Cabecalho from '../components/Cabecalho';

const {Navigator: AppNavigator, Screen: AppScreen} = createStackNavigator();

export default function AppRoutes() {
  return (    
      <AppNavigator screenOptions={{headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
        <AppScreen 
          name="MapaOrfanato" 
          component={MapaOrfanato}
          // options={{
          //   headerShown: false
          // }}
        />
        <AppScreen 
          name="DetalheOrfanato" 
          component={DetalheOrfanato}          
          options={{
            headerShown: true,
            header: () => <Cabecalho exibirCancelar={false} titulo="Orfanato"/>
          }}
        />
        <AppScreen 
          name="SelecaoPosicaoMapa" 
          component={SelecaoPosicaoMapa}          
          options={{
            headerShown: true,
            header: () => <Cabecalho titulo="Selecione no mapa"/>
          }}
        />
        <AppScreen 
          name="DadoOrfanato" 
          component={DadoOrfanato}          
          options={{
            headerShown: true,
            header: () => <Cabecalho titulo="Informe os dados"/>
          }}
        />
      </AppNavigator>    
  );
}



