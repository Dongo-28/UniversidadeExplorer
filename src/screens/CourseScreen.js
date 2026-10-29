import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CourseScreen({ route, navigation }) {
  const { course } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.name}</Text>
      <Text style={styles.description}>{course.description}</Text>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="Ver Estudantes" 
          onPress={() => navigation.navigate('Students', { courseName: course.name })} 
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, textAlign: 'center', marginBottom: 30 },
  buttonContainer: { marginVertical: 10, width: '80%' },
});