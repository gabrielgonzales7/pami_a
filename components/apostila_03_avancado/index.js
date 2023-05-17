import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Botao from './botao';

import styles from './styles';

export default function apostila03() { 

  const [contador, setContador] = useState(0);

  function AddNumber() {
    setContador(contador + 1); 
  }

  function SubNumber() {
    setContador(contador - 1); 
  }

  function ZeroNumber() {
    setContador(0); 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Exemplo apostila 3</Text>

      
      <View style={styles.counter}>

        <View style={styles.horizontal}>

          <Botao sinal={'-'} funcao={SubNumber} />

          <Text style={styles.textCounter}>{contador}</Text>

          <Botao sinal={'+'} funcao={AddNumber} />

        </View>

        <TouchableOpacity 
          style={[styles.button, {borderRadius: 30}]} 
          onPress={() => ZeroNumber()}
        >
          <Text style={styles.textButton} >Zerar</Text>
        </TouchableOpacity>

      </View>
                  

    </View>
  );
}

