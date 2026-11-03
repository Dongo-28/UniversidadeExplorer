import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList, Button, StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';

export default function StudentsScreen({ route, navigation }) {
  const { courseName } = route.params || { courseName: 'Curso' };

  // Estados: um para o texto do input, outro para a lista de estudantes
  const [inputText, setInputText] = useState('');
  const [students, setStudents] = useState([
    { id: '1', name: 'Ana' },
    { id: '2', name: 'João' },
    { id: '3', name: 'Maria' },
  ]);

  // Função para adicionar um novo estudante
  const handleAddStudent = () => {
    const trimmedName = inputText.trim(); // Remove espaços em branco do início e fim
    
    if (trimmedName === '') {
      return; // Não faz nada se o campo estiver vazio
    }

    const newStudent = {
      id: Date.now().toString(), // Gera um ID único baseado no timestamp atual
      name: trimmedName,
    };

    setStudents([...students, newStudent]); // Adiciona o novo estudante à lista
    setInputText(''); // Limpa o campo de texto
  };

  // Função para remover um estudante
  const handleRemoveStudent = (idToRemove) => {
    // Filtra a lista, mantendo apenas os estudantes cujo ID é diferente do ID a remover
    const updatedStudents = students.filter((student) => student.id !== idToRemove);
    setStudents(updatedStudents);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={styles.header}>Estudantes de {courseName}</Text>

      {/* Área de Adição */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escreve um nome..."
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={handleAddStudent} // Permite adicionar ao carregar no Enter do teclado
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddStudent}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      {/* Contador */}
      <Text style={styles.counterText}>
        Total: {students.length} {students.length === 1 ? 'nome' : 'nomes'}
      </Text>

      {/* Lista Dinâmica */}
      <FlatList
        data={students}
        keyExtractor={(item) => item.id} // Usa o ID único gerado
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhum nome adicionado</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.studentItem}>
            <TouchableOpacity
              style={styles.studentNameContainer}
              onPress={() => navigation.navigate('Profile', { studentName: item.name })}
            >
              <Text style={styles.studentName}>{item.name}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => handleRemoveStudent(item.id)}
            >
              <Text style={styles.removeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Botão Voltar */}
      <View style={styles.footer}>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
    marginRight: 8,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  counterText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
    fontWeight: '600',
  },
  listContainer: {
    paddingBottom: 20,
  },
  studentItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  studentNameContainer: {
    flex: 1,
  },
  studentName: {
    fontSize: 16,
    color: '#333',
  },
  removeButton: {
    backgroundColor: '#FF3B30',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#999',
    fontSize: 16,
    fontStyle: 'italic',
  },
  footer: {
    marginTop: 10,
  },
});