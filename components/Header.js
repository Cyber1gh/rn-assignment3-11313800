import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.greeting}>
        <Text style={styles.greetingText}>Hello, Devs</Text>
         <Image source={require('../assets/Profile.png')} style={styles.profileImage} />
      </View>
      <View><Text style={styles.taskCount}>14 tasks today</Text></View>

      <View style={styles.searchSection}>
        <Image source={require('../assets/search.png')} style={styles.searchIcon} />
        <TextInput style={[styles.searchInput, styles.placeholder]} placeholder="Search" />
        {/* <Button title="Filter" onPress={() => {}} color="#FA7249" /> */}
        <TouchableOpacity onPress={() =>{}}>
          <Image source={require('../assets/Filter.png')} style= {styles.filterIcon}/>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginBottom: 20,
    padding:10,
  },
  greeting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greetingText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  taskCount: {
    color: 'gray',
    fontWeight:"bold",
    marginTop: -4,
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  searchSection: {
    flexDirection: 'row',
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: "none",
    borderRadius: 10,
    marginRight: 30,
    marginLeft: 0,
    backgroundColor: "#ffffff"
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: -35,
    marginTop: 10,
    left: 15,
    position: "absolute",
    zIndex: 1,
  },
  placeholder: {
    paddingLeft: 45,
    fontWeight:"bold",
  },
  filterIcon: {
    width: 45,
    height: 45,
  },
});

export default Header;