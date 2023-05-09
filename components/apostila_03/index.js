import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function apostila03() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Exemplo apostila 3</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => alert('oi')}
      >
        <Text style={styles.textButton} >Hello World!!!</Text>
      </TouchableOpacity>

    </View>
  );
}

