import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PrincipalScreen() {
  const recomendaciones = [
    { id: '1', titulo: 'Mix Diario 1', subtitulo: 'Tus canciones más escuchadas' },
    { id: '2', titulo: 'Éxitos del Momento', subtitulo: 'Lo más sonado hoy' },
    { id: '3', titulo: 'Modo Concentración', subtitulo: 'Ritmos instrumentales' },
    { id: '4', titulo: 'Clásicos en Español', subtitulo: 'Para cantar a todo pulmón' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerTitle}>Buenas tardes</Text>

        {/* Accesos rápidos */}
        <View style={styles.quickGrid}>
          <TouchableOpacity style={styles.quickCard}>
            <Ionicons name="heart" size={22} color="#1DB954" />
            <Text style={styles.quickText}>Tus Me Gusta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickCard}>
            <Ionicons name="flame" size={22} color="#FF5722" />
            <Text style={styles.quickText}>Tendencias</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Recomendado para ti</Text>
        {recomendaciones.map((item) => (
          <TouchableOpacity key={item.id} style={styles.card}>
            <View style={styles.coverPlaceholder}>
              <Ionicons name="musical-notes" size={28} color="#FFFFFF" />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>{item.titulo}</Text>
              <Text style={styles.cardSubtitle}>{item.subtitulo}</Text>
            </View>
            <Ionicons name="play-circle" size={32} color="#1DB954" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  scrollContent: { padding: 20 },
  headerTitle: { color: '#FFFFFF', fontSize: 26, fontWeight: 'bold', marginBottom: 20 },
  quickGrid: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 },
  quickCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#282828',
    width: '48%',
    padding: 12,
    borderRadius: 8,
  },
  quickText: { color: '#FFFFFF', fontWeight: '600', marginLeft: 10 },
  sectionTitle: { color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  coverPlaceholder: {
    width: 55,
    height: 55,
    borderRadius: 8,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardInfo: { flex: 1, marginLeft: 15 },
  cardTitle: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  cardSubtitle: { color: '#B3B3B3', fontSize: 13, marginTop: 3 },
});
          
