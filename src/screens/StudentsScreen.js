import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { STUDENTS } from '../data/mockData';

export default function StudentsScreen({ route, navigation }) {
  const { courseName } = route.params || { courseName: 'Curso' };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Estudantes de {courseName}</Text>
      
      <FlatList
        data={STUDENTS}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Profile', { studentName: item })}
          >
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
      
      <View style={styles.buttonContainer}>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  item: { padding: 16, backgroundColor: '#e0e0e0', marginBottom: 10, borderRadius: 8 },
  itemText: { fontSize: 16 },
  buttonContainer: { marginTop: 20 },
});