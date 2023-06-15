import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

function Apostila04() {
  const [nome, setNome] = useState("Nome");
  const [mensagem, setMensagem] = useState("Aqui aparece o texto digitado");
  const [sobreNome, setSobreNome] = useState("Sobrenome");

  function apresentaMensagem() {
    setMensagem(`${nome} ${sobreNome}`);
    setNome("");
    setSobreNome("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Exemplo 4</Text>

      <Text style={styles.txtSaida}>{mensagem}</Text>
      
      <Text style={styles.nomes}>Nome:</Text>

      <TextInput
        style={styles.txtEntrada}
        onChangeText={(inputNome) => setNome(inputNome)}
        value={nome}
      />

      <Text style={styles.nomes}>Sobrenome:</Text>

      <TextInput
        style={styles.txtEntrada}
        onChangeText={(inputSobreNome) => setSobreNome(inputSobreNome)}
        value={sobreNome}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => apresentaMensagem()}
      >
        <Text style={styles.textButton}>Mostrar valor digitado</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Apostila04;
