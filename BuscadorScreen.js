import React from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BuscadorScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Buscar</Text>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput 
            placeholder="¿Qué quieres reproducir?" 
            placeholderTextColor="#888"
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Explorar todo</Text>
        <View style={styles.grid}>
          <View style={[styles.categoryCard, { backgroundColor: '#E11164' }]}>
            <Text style={styles.categoryText}>Música</Text>
          </View>
          <View style={[styles.categoryCard, { backgroundColor: '#1E3264' }]}>
            <Text style={styles.categoryText}>Podcasts</Text>
          </View>
          <View style={[styles.categoryCard, { backgroundColor: '#8464AC' }]}>
            <Text style={styles.categoryText}>Eventos</Text>
          </View>
          <View style={[styles.categoryCard, { backgroundColor: '#E8115B' }]}>
            <Text style={styles.categoryText}>Lanzamientos</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  header: { padding: 20 },
  headerTitle: { color: '#FFFFFF', fontSize: 26, fontWeight: 'bold', marginBottom: 15 },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 45,
  },
  searchIcon: { marginRight: 10 },
  input: { flex: 1, fontSize: 16, color: '#000000' },
  content: { padding: 20 },
  sectionTitle: { color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  categoryCard: {
    width: '48%U' > 0 ? '48%' : '48%',
    height: 100,
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    justifyContent: 'flex-end',
  },
  categoryText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});
            
