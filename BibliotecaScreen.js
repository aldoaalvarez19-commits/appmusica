import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const playlists = [
  { id: '1', title: 'Tus me gusta', songs: '4 canciones' },
  { id: '2', title: 'Éxitos Rock', songs: '15 canciones' },
  { id: '3', title: 'Lo mejor del Pop', songs: '30 canciones' },
  { id: '4', title: 'Entrenamiento', songs: '12 canciones' },
];

export default function BibliotecaScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>A</Text>
          </View>
          <Text style={styles.headerTitle}>Tu biblioteca</Text>
        </View>
        <Ionicons name="add" size={28} color="#FFFFFF" />
      </View>

      <FlatList
        data={playlists}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.playlistItem}>
            <View style={styles.playlistCover}>
              <Ionicons name="musical-notes" size={24} color="#FFFFFF" />
            </View>
            <View style={styles.playlistInfo}>
              <Text style={styles.playlistTitle}>{item.title}</Text>
              <Text style={styles.playlistSubtitle}>Lista • {item.songs}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 20 
  },
  userInfo: { flexDirection: 'row', alignItems: 'center' },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#535353',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 },
  headerTitle: { color: '#FFFFFF', fontSize: 24, fontWeight: 'bold' },
  listContainer: { paddingHorizontal: 20 },
  playlistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  playlistCover: {
    width: 60,
    height: 60,
    backgroundColor: '#282828',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  playlistInfo: { flex: 1 },
  playlistTitle: { color: '#FFFFFF', fontSize: 16, fontWeight: '500', marginBottom: 4 },
  playlistSubtitle: { color: '#B3B3B3', fontSize: 13 },
});
    
