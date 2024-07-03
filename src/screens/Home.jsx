import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const userName = 'VISHWAS'; // Replace this with dynamic user name if available

  const topics = [
    { name: 'Mathematics', icon: <FontAwesome5 name="calculator" size={30} color="#FF4500" /> },
    { name: 'Science', icon: <FontAwesome5 name="flask" size={30} color="#FF4500" /> },
    { name: 'Computer', icon: <FontAwesome5 name="desktop" size={30} color="#FF4500" /> },
    { name: 'General Knowledge', icon: <FontAwesome5 name="globe" size={30} color="#FF4500" /> },
    { name: 'Sports', icon: <FontAwesome5 name="football-ball" size={30} color="#FF4500" /> },
    { name: 'Art and Literature', icon: <FontAwesome5 name="book" size={30} color="#FF4500" /> },
  ];

  return (
    <LinearGradient colors={["#003352", "#002338", "#000D1E", "#1D0C24"]} style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <FontAwesome name="user-circle" size={40} color="#00FF00" />
          <Text style={styles.greeting}>Hi {userName}</Text>
        </View>
        <View style={styles.rewardsSection}>
          <FontAwesome5 name="heart" size={40} color="#FF4500" />
          <Text style={styles.rewardsText}>REWARDS</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.boxContainer}>
          {topics.map((topic, index) => (
            <TouchableOpacity key={index} style={[styles.topicBox, styles[`box${index + 1}`]]}>
              {topic.icon}
              <Text style={styles.topicText}>{topic.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.bottomNavigation}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" size={40} color="#FF4500" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={styles.middleDot} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('NextScreen')}>
          <FontAwesome5 name="arrow-right" size={40} color="#FF4500" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00FF00',
    marginLeft: 10,
  },
  rewardsSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rewardsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF4500',
    marginLeft: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  topicBox: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#FF4500',
    borderRadius: 10,
  },
  box1: {
    width: Dimensions.get('window').width / 3 - 20,
    height: Dimensions.get('window').height / 6,
  },
  box2: {
    width: Dimensions.get('window').width / 3 - 20,
    height: Dimensions.get('window').height / 6,
  },
  box3: {
    width: Dimensions.get('window').width / 1.5 - 20,
    height: Dimensions.get('window').height / 5,
  },
  box4: {
    width: Dimensions.get('window').width / 3 - 20,
    height: Dimensions.get('window').height / 6,
  },
  box5: {
    width: Dimensions.get('window').width / 3 - 20,
    height: Dimensions.get('window').height / 6,
  },
  box6: {
    width: Dimensions.get('window').width / 1.5 - 20,
    height: Dimensions.get('window').height / 5,
  },
  topicText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF4500',
    textAlign: 'center',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  middleDot: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FF4500',
  },
});

export default HomeScreen;
