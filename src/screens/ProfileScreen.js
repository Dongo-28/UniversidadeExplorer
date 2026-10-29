import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProfileScreen({ route, navigation }) {
  const { studentName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Estudante</Text>
      <Text style={styles.name}>{studentName}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 22, marginBottom: 10 },
  name: { fontSize: 28, fontWeight: 'bold', color: '#007BFF', marginBottom: 40 },
  buttonContainer: { width: '80%' },
});