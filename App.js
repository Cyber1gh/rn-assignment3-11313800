import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from './components/Header';
import Category from './components/Category';
import Task from './components/Task';


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Category />
        <OngoingTask />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF3EB',
    padding: 10,
  },
});