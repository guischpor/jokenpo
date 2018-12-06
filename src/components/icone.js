import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

class Icone extends Component{
    render(){
      if (this.props.escolha === 'pedra'){
        return(
          <View style={styles.icone}>
            <Text style={styles.txtJogador}>{this.props.jogador}</Text>
            <Image source={require('../../img/pedra.png')}/>
          </View>
        );
      }else if (this.props.escolha === 'papel'){
        return(
          <View style={styles.icone}>
            <Text style={styles.txtJogador}>{this.props.jogador}</Text>
            <Image source={require('../../img/papel.png')}/>
          </View>
        );
      }else if(this.props.escolha === 'tesoura'){
        return(
          <View style={styles.icone}>
            <Text style={styles.txtJogador}>{this.props.jogador}</Text>
            <Image source={require('../../img/tesoura.png')}/>
          </View>
        );
      }else{
        return false;
      }
    }
  }

  const styles = StyleSheet.create({
    icone:{
      alignItems: 'center',
      marginBottom: 20,
    },
    txtJogador:{
      fontSize: 18,
      fontWeight: 'bold'
    }
  });

export default Icone;