import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

const tasks = [
  { id: '1', name: 'Mobile App Development' },
  { id: '2', name: 'Web Development' },
  { id: '3', name: 'East food  ' },
  { id: '4', name: 'Dance to the music' },
  { id: '5', name: 'Go to the market' },
  { id: '6', name: 'read my novels' },
  { id: '7', name: 'Ride a bike' },
  { id: '8', name: 'Sing ' },
  { id: '9', name: ' Shower' },
  { id: '10', name: 'watch movies' },
  { id: '11', name: 'Swim' },
  { id: '12', name: 'Movie night' },
  { id: '13', name: 'Install a software' },
  { id: '14', name: 'Dress to the bar' },
  { id: '15', name: 'Run in the morning' },
];

const Tasks = () => {
  return (
    
    <View style={styles.ongoingTaskSection}>
      <Text style={styles.sectionTitle}>Ongoing Task</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <Text style={styles.taskName}>{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
   
  );
};

const styles = StyleSheet.create({
  ongoingTaskSection: {
    marginBottom: 20,
    fontFamily: "poppins",
    padding: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: "poppins",
    fontWeight: 'bold',
    marginBottom: 10,
  },
  taskCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth:.2,
    borderColor:"#e8d1ba",
    padding: 20,
    height: 130,
    marginBottom: 10,
  },
  taskName: {
    fontSize: 16,
    fontWeight:"bold",
    fontFamily: "poppins",
    marginTop: 25,
    
  },
});

export default Tasks;