import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';

import imgFundo from '../../assets/images/logo.png';
import imgConsole from '../../assets/images/console-1.png';
import imgJogo from '../../assets/images/jogo-1.png';
import imgXcloud from '../../assets/images/xcloud-1.png';
import estilos from './estilos';

export default function TelaInicial (props) {
  return (
    <View style={ estilos.container }>
      <Image source={ imgFundo } style={ estilos.img } />
      <Text style={ estilos.titulo }>Xbox</Text>
      <Text style={ estilos.descricao }>Xbox é uma marca de consoles criada pela Microsoft. Toque nos cards para conhecer.</Text>

      <Pressable 
        onPress={ () => { props.navigation.navigate("Consoles") } }
        style={estilos.card}
      >
        <Image source={ imgConsole } style={ estilos.cardImg } />
        <Text style={ estilos.cardTexto}>Conheça os consoles</Text>
      </Pressable>
      
      <Pressable 
        onPress={ () => { props.navigation.navigate("Jogos") } }  
        style={estilos.card}
      >
        <Image source={ imgJogo } style={ estilos.cardImg } />
        <Text style={ estilos.cardTexto}>Conheça os jogos</Text>
      </Pressable>
      
      <Pressable 
        onPress={ () => { props.navigation.navigate("Nuvem") } }  
        style={estilos.card}
      >
        <Image source={ imgXcloud } style={ estilos.cardImg } />
        <Text style={ estilos.cardTexto}>Conheça o xCloud</Text>
      </Pressable>
    </View>
  )
}