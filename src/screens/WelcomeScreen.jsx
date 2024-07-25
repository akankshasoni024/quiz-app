import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeScreen = ({ navigation }) => {
  const [name, setName] = useState('');

  const handleSaveName = async () => {
    try {
      await AsyncStorage.setItem('userName', name);
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.welcomeText}>WELCOME!</Text>
          <Text style={styles.subTitleText}>Quizee</Text>
          <Text style={styles.scoreText}>PLAY | LEARN | ENJOY ⚡ </Text>
        </View>
        <Image
          source={require('../../assets/cylinderStyle.png')} // Replace with the correct path
          style={styles.headerImage}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Let's get started...</Text>
        <Image
        source={require('../../assets/user.png')} // Replace with the correct path
        style={styles.userImag}/>
        <Text style={styles.subtitle}>Enter your name</Text>
        <TextInput
          style={styles.input}
          placeholder="Your name"
          value={name}
          onChangeText={setName}
        />
        <TouchableOpacity style={styles.button} onPress={handleSaveName}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require('../../assets/bottomStyle.png')} // Replace with the correct path
        style={styles.bottomStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#002651',
  },
  header: {
    backgroundColor: "#D1F7FF",
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
  },
  headerTextContainer: {
    flex: 1,
    paddingLeft: 30,
  },
  welcomeText: {
    fontSize: 24,
    color: 'gray',
  },
  subTitleText: {
    fontSize: 18,
    color: '#00A9FF',
  },
  scoreText: {
    fontSize: 18,
    color: '#F9AC0B',
    marginTop: 10,
  },
  headerImage: {
    width: 130,
    height: 120,
    top: -10,
    right: -20,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#00A9FF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomStyle: {
    width: 100,
    height: 120,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  userImag:{
    width:80,
    height:80,
    margin:30,
  }
});

export default WelcomeScreen;
