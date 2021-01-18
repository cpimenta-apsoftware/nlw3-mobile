import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface CabecalhoProps {
  titulo: string,
  exibirCancelar?: boolean
}

// export default function Cabecalho(props: CabecalhoProps) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{props.titulo}</Text>
//     </View>
//   );
// }

export default function Cabecalho({titulo, exibirCancelar = true }: CabecalhoProps) {
  const navegacao = useNavigation();

  function tratarNavegacaoMapaOrfanato() {
    navegacao.navigate('MapaOrfanato');
  }
  
  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navegacao.goBack}>
        <Feather name="arrow-left" size={24} color="#15b6d6" />
      </BorderlessButton>
      
      <Text style={styles.title}>{titulo}</Text>

      { exibirCancelar ? (
        <BorderlessButton onPress={tratarNavegacaoMapaOrfanato}>
        <Feather name="x" size={24} color="#ff669d" />
      </BorderlessButton>      
      ) : (
        <View/>
      )}      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f9fafc',
    borderBottomWidth: 1,
    borderColor: '#dde3f8',
    paddingTop: 44,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#8fa7b3',
    fontSize: 16
  }
})