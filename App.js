import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
      this.state = {escolhaUsuario: '', 
      escolhaComputador: '', 
      resultado: ''
    };
  }
 
  jokenpo(escolhaUsuario){

    //gera numero aleatorio (0, 1, 2)
    var numAleatorio = Math.floor(Math.random() * 3);
    var escolhaComputador = '';

    switch(numAleatorio){
      case 0:
        escolhaComputador = 'pedra';
        break;
      case 1:
        escolhaComputador = 'papel';
        break;
      case 2:
        escolhaComputador = 'tesoura';
        break;
    }

    // if (numAleatorio == 0){
    //   escolhaComputador = 'pedra';
    // }

    // if (numAleatorio == 1){
    //   escolhaComputador = 'papel';
    // }

    // if (numAleatorio == 2){
    //   escolhaComputador = 'tesoura';
    // }

    var resultado = '';

    if(escolhaComputador == 'pedra'){
      if(escolhaUsuario == 'pedra'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'papel'){
        resultado = 'Usuário ganhou';
      }

      if(escolhaUsuario == 'tesoura'){
        resultado = 'Computador ganhou';
      }
    }

    if(escolhaComputador == 'papel'){
      if(escolhaUsuario == 'papel'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'tesoura'){
        resultado = 'Usuário ganhou';
      }

      if(escolhaUsuario == 'pedra'){
        resultado = 'Computador ganhou';
      }
    }

    if(escolhaComputador == 'tesoura'){
      if(escolhaUsuario == 'tesoura'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'pedra'){
        resultado = 'Usuário ganhou';
      }

      if(escolhaUsuario == 'papel'){
        resultado = 'Computador ganhou';
      }
    }

    this.setState({
      escolhaUsuario: escolhaUsuario, 
      escolhaComputador: escolhaComputador,
      resultado: resultado,
    });
 }

  render() {
    return (
      <View>
        <Text>Escolha do computador: {this.state.escolhaComputador}</Text>
        <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
        <Text>Resultado: {this.state.resultado}</Text>
        <Button title="pedra" onPress={ () => {this.jokenpo('pedra')}}/>
        <Button title="papel" onPress={ () => {this.jokenpo('papel')}}/>
        <Button title="tesoura" onPress={ () => {this.jokenpo('tesoura')}}/>
      </View>
    );
  }
}

