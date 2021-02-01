import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { entrar } from '../../services/auth';

export default function AcessoUsuario() {
  async function tratarBotaoEntrar() {
    const response = await entrar();
    
    console.log(response);
  }

  return (
    <View style={styles.botaoEntrar}>
      <Button title="Entrar" onPress={tratarBotaoEntrar} />
    </View>
  );
}

const styles = StyleSheet.create({
  botaoEntrar: {
    flex: 1,
    justifyContent: 'center'
  },  
});