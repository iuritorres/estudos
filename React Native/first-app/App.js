import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nubank</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#820AD1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    fontSize: 16,
    color: 'white',
  },

  img: {
    width: 400,
    height: 400,
  },

});