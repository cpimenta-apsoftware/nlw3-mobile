import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import MapaOrfanato from '../pages/MapaOrfanato';
import DetalheOrfanato from '../pages/DetalheOrfanato';
import SelecaoPosicaoMapa from '../pages/CriacaoOrfanato/SelecaoPosicaoMapa';
import DadoOrfanato from '../pages/CriacaoOrfanato/DadoOrfanato';
import Cabecalho from '../components/Cabecalho';
import AcessoUsuario from '../pages/Acesso/AcessoUsuario';

const {Navigator: AuthNavigator, Screen: AuthScreen} = createStackNavigator();

export default function AuthRoutes() {
  return (    
      <AuthNavigator screenOptions={{headerShown: true, cardStyle: { backgroundColor: '#f2f3f5' } }}>
        <AuthScreen 
          name="AcessoUsuario" 
          component={AcessoUsuario}         
        />       
      </AuthNavigator>    
  );
}



