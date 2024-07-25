import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const name = await AsyncStorage.getItem('userName');
        if (name) {
          setUserName(name);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserName();
  }, []);

  const categories = [
    {
      title: "Mathematics",
      image: require("../../assets/homeIcons/mathematics.png"),
      screen: "QuestionScreen",
      subject: "Mathematics",
    },
    {
      title: "Science",
      image: require("../../assets/homeIcons/science.png"),
      screen: "QuestionScreen",
      subject: "Science",
    },
    {
      title: "Computer",
      image: require("../../assets/homeIcons/computer.png"),
      screen: "QuestionScreen",
      subject: "Computer Science",
    },
    {
      title: "General Knowledge",
      image: require("../../assets/homeIcons/general_knowledge.png"),
      screen: "QuestionScreen",
      subject: "General Knowledge",
    },
    {
      title: "Sports",
      image: require("../../assets/homeIcons/sports.png"),
      screen: "QuestionScreen",
      subject: "Sports",
    },
    {
      title: "Art and Literature",
      image: require("../../assets/homeIcons/art_and_literature.png"),
      screen: "QuestionScreen",
      subject: "Art and Literature",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.userText}>Hi {userName},</Text>
          <Text style={styles.welcomeText}>Welcome to Quizze!</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('AboutScreen')}>
          <Text style={styles.rewardsText}>About Us</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categories}>
      <Text style={styles.headline}>Choose a subject to play Quiz..</Text>

        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryButton}
            onPress={() =>
              navigation.navigate(category.screen, {
                subject: category.subject,
              })
            }
          >
            <Image source={category.image} style={styles.icon} />
            <Text style={styles.categoryText}>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d3b66",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  userText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  welcomeText: {
    color: "white",
    fontSize: 16,
    paddingTop:5,
    fontWeight: "bold",

  },
  headline: {
    color: "white",
    fontSize: 20,
    paddingTop:5,
    textAlign:"center",
    fontWeight: "bold",

  },
  rewardsText: {
    color: "#ffd700",
    fontSize: 18,
    fontWeight: "bold",
  },
  categories: {
    justifyContent: "center",
    width: "100%",
  },
  categoryButton: {
    backgroundColor: "#1e3d59",
    paddingVertical: 20,
    paddingHorizontal: 40,
    marginVertical: 10,
    width: "100%",
    borderRadius: 5,
    borderColor: "#40a8c4",
    borderWidth: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  categoryText: {
    color: "white",
    fontSize: 18,
  },
});

export default HomeScreen;
