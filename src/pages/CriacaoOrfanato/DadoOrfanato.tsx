import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Switch, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import api from '../../services/api';

interface ParametrosRotaDadoOrfanato {
  posicao: {
    latitude: number,
    longitude: number
  }
}

export default function DadoOrfanato(){
  //Campos do formulario
  const [nome, definirNome] = useState('');
  const [sobre, definirSobre] = useState('');
  const [instrucoes, definirInstrucoes] = useState('');
  const [horario_atendimento, definirHorarioAtendimento] = useState('');
  const [aberto_fim_semana, definirAbertoFimSemana] = useState(true);
  const [imagens, definirImagens] = useState<File[]>([]);
  const [previsualizacaoImagens, definirPrevisualizacaoImagens] = useState<string[]>([])

  const ioNavegacao = useNavigation();
  const ioRota = useRoute();  
  const ioParametrosRota = ioRota.params as ParametrosRotaDadoOrfanato;

  async function tratarCriacaoOrfanato() {
    const { latitude, longitude } = ioParametrosRota.posicao;

    console.log({
      nome,
      latitude,
      longitude,
      sobre,
      instrucoes,
      horario_atendimento,
      aberto_fim_semana,      
    });

    const data = new FormData();

    data.append('nome', nome);
    data.append('sobre', sobre);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('instrucoes', instrucoes);
    data.append('horario_atendimento', horario_atendimento);
    data.append('aberto_fim_semana', String(aberto_fim_semana));

    previsualizacaoImagens.forEach((imagem, indice) => {
      data.append('imagens', {
        name: `image_${indice}.jpg`,
        type: 'image/jpg',
        uri: imagem,
      } as any)
    });

    await api.post('orfanatos', data);

    alert('Cadastro realizado com sucesso!');
    ioNavegacao.navigate('MapaOrfanato');
  }

  async function tratarSelecaoImagens() {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if(status !== 'granted') {
      alert('Eita, precisamos de acesso às suas fotos...');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if(result.cancelled) {
      return;
    }

    const { uri: imagem } = result;

    definirPrevisualizacaoImagens([...previsualizacaoImagens, imagem]);
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Text style={styles.title}>Dados</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={definirNome}
      />

      <Text style={styles.label}>Sobre</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        multiline
        value={sobre}
        onChangeText={definirSobre}
      />

      {/* <Text style={styles.label}>Whatsapp</Text>
      <TextInput
        style={styles.input}
      /> */}

      <Text style={styles.label}>Fotos</Text>

      <View style={styles.uploadedImagesContainer}>
        {previsualizacaoImagens.map(imagem => { 
          return (
            <Image               
              key={imagem}
              source={{ uri: imagem }} 
              style={styles.uploadedImage}
            />
          );
        })}
      </View>

      <TouchableOpacity style={styles.imagesInput} onPress={tratarSelecaoImagens}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </TouchableOpacity>

      <Text style={styles.title}>Visitação</Text>

      <Text style={styles.label}>Instruções</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        multiline
        value={instrucoes}
        onChangeText={definirInstrucoes}
      />

      <Text style={styles.label}>Horario de visitas</Text>
      <TextInput
        style={styles.input}
        value={horario_atendimento}
        onChangeText={definirHorarioAtendimento}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Atende final de semana?</Text>
        <Switch 
          thumbColor="#fff" 
          trackColor={{ false: '#ccc', true: '#39CC83' }}
          value={aberto_fim_semana}
          onValueChange={definirAbertoFimSemana}
        />
      </View>

      <RectButton style={styles.nextButton} onPress={tratarCriacaoOrfanato}>
        <Text style={styles.nextButtonText}>Cadastrar</Text>
      </RectButton>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    color: '#5c8599',
    fontSize: 24,
    fontFamily: 'Nunito_700BoldExRenFont',
    marginBottom: 32,
    paddingBottom: 24,
    borderBottomWidth: 0.8,
    borderBottomColor: '#D3E2E6'
  },

  label: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 8,
  },

  comment: {
    fontSize: 11,
    color: '#8fa7b3',
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#d3e2e6',
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
  },

  uploadedImagesContainer: {
    flexDirection: 'row', //para que uma imagem fique ao lado da outra
  },

  uploadedImage: {
    width: 64,
    height: 64,
    borderRadius: 20,
    marginBottom: 32,
    marginRight: 8,
  },

  imagesInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'dashed',
    borderColor: '#96D2F0',
    borderWidth: 1.4,
    borderRadius: 20,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 32,
  },

  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  }
})