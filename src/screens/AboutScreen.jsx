import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const initialLayout = { width: Dimensions.get('window').width };

const AboutScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'about', title: 'About' },
    { key: 'contact', title: 'Contact Us' },
  ]);

  const AboutRoute = () => (
    <View style={styles.aboutSection}>
      <Text style={styles.aboutText}>
      Welcome to our Quiz App! Designed to make learning fun and engaging, our app offers an intuitive and seamless experience. Dive in, challenge your knowledge with a variety of quizzes, and track your progress as you improve. Enjoy the journey and happy quizzing!
      </Text>
      <Text style={styles.developerTitle}>Meet Developers</Text>
      <View style={styles.developerSection}>
        <View style={styles.developer}>
          <Image
            source={require('../../assets/akankshaImg.png')} // Replace with the correct path
            style={styles.developerImage}
          />
          <Text style={styles.developerText}>Akanksha Soni, with a strong coding background, brought the technical aspects to life, ensuring a smooth and responsive experience.</Text>
        </View>
        <View style={styles.developer}>
        <Image
            source={require('../../assets/vishwasImg.png')} // Replace with the correct path
            style={styles.developerImage}
          />
          <Text style={styles.developerText}>Vishwas Chhabra, specializing in design, crafted the app's visual appeal and user interface, making it both attractive and easy to navigate.</Text>
        </View>
      </View>
    </View>
  );
  const ContactRoute = () => (
    <View style={styles.contactForm}>
      <View style={styles.formWrapper}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#D1F7FF" // Adjust placeholder text color
      />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#D1F7FF"/>
      <TextInput style={styles.input} placeholder="Message" multiline placeholderTextColor="#D1F7FF"/>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Send Message</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.linksContainer}>
        <TouchableOpacity style={styles.link} onPress={() => Linking.openURL('https://www.figma.com/design/4P5t9jNucNe6LARZegZpfz/Infinite-Vault-Project-Design?node-id=0-1&t=TpVD2GyoPlbpzoVa-1')}>
          <Image
            source={require('../../assets/figma.png')} // Replace with the correct path
            style={styles.linkLogo}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => Linking.openURL('https://github.com/akankshasoni024/quiz-app.git')}>
          <Image
            source={require('../../assets/github.png')} // Replace with the correct path
            style={styles.linkLogo}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => Linking.openURL('mailto:contact.quizze@gmail.com')}>
          <Image
            source={require('../../assets/gmail.png')} // Replace with the correct path
            style={styles.linkLogo}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => Linking.openURL('tel:+91 8764460450')}>
          <Image
            source={require('../../assets/phone.png')} // Replace with the correct path
            style={styles.linkLogo}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
  
  const renderScene = SceneMap({
    about: AboutRoute,
    contact: ContactRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      labelStyle={styles.label}
    />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.welcomeText}>ABOUT US</Text>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.subTitleText}>Quizze</Text>
      </TouchableOpacity>
                  <Text style={styles.scoreText}>PLAY | LEARN | ENJOY ⚡</Text>
          </View>
          <Image
            source={require('../../assets/cylinderStyle.png')} // Replace with the correct path
            style={styles.headerImage}
          />
        </View>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
        />
      </View>
      <Image
        source={require('../../assets/bottomStyle.png')} // Replace with the correct path
        style={styles.bottomStyle}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#D1F7FF',
  },
  container: {
    flex: 1,
    backgroundColor: '#002651',
  },
  header: {
    backgroundColor: "#D1F7FF",
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
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
  tabBar: {
    backgroundColor: '#D1F7FF',
    margin: 40,
    borderRadius: 100,
  },
  indicator: {
    height: 40,
    width: 150,
    borderRadius: 100,
    left: 10,
    top: 5,
    backgroundColor: '#3EDDFF',
  },
  label: {
    fontWeight: '500',
    color: 'gray',
  },
  aboutSection: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  aboutText: {
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  developerTitle: {
    fontSize: 20,
    color: '#F9AC0B',
    textDecorationLine: "underline",
    margin: 15,
  },
  developerSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  developer: {
    alignItems: 'center',
    maxWidth: '50%',
  },
  developerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop:20,
  },
  developerText: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 10,
    padding:5,
  },
  contactForm: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  formWrapper:{
    width: '90%',
    borderColor:"#D1F7FF",
    borderWidth:2,
    padding:30,
    borderRadius:5,
    borderTopRightRadius:80,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#D1F7FF',
  },
  submitButton: {
    backgroundColor: '#00A9FF',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  submitButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  bottomStyle: {
    width: 100,
    height: 120,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },

  submitButton: {
    backgroundColor: '#00A9FF',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  submitButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  linksContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  link: {
    alignItems: 'center',
  },
  linkLogo: {
    marginTop:30,
    width: 40,
    height: 40,
  },
  linkText: {
    color: '#FFF',
    marginTop: 5,
  },
});

export default AboutScreen;
