import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function AcessoUsuario() {
  return (
    <View style={styles.botaoEntrar}>
      <Button title="Entrar" onPress={() => { }} />
    </View>
  );
}

const styles = StyleSheet.create({
  botaoEntrar: {
    flex: 1,
    justifyContent: 'center'
  },  
});