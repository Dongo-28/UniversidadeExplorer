import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o App</Text>
      <Text style={styles.text}>
        O "Universidade Explorer" foi criado como parte do desafio prático da disciplina de Programação de Dispositivos Móveis.
      </Text>
      <Text style={styles.text}>
        Este app demonstra a consolidação de conceitos de navegação, passagem de dados e organização de rotas.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  text: { fontSize: 16, marginBottom: 15, textAlign: 'justify', lineHeight: 24 },
});