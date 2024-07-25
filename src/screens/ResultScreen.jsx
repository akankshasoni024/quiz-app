import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ResultScreen = ({ route, navigation }) => {
  const { score, correct, incorrect, total, attempted, status } = route.params;

  const getEmoji = () => {
    return score > 30
      ? require("../../assets/congratulations.png")
      : require("../../assets/ooops.png");
  };

  const iconCorrect = require("../../assets/correct.png");
  const iconIncorrect = require("../../assets/incorrect.png");
  const iconTotal = require("../../assets/total.png");
  const iconAttempted = require("../../assets/attempted.png");

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Quiz Summary</Text>
      <View style={styles.card}>
        <Image source={getEmoji()} style={styles.emoji} />
        <Text style={styles.status}>{score > 30?"Congratulations":"Oops"}!!!</Text>
        <Text style={styles.score}>Your Score is</Text>
        <Text style={styles.scoreValue}>{score}%</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Image source={iconCorrect} style={styles.icon} />
            <View style={styles.statTextContainer}>
              <Text style={styles.statNumber}>{correct}</Text>
              <Text style={styles.statLabel}>Correct</Text>
            </View>
          </View>
          <View style={styles.statBox}>
            <Image source={iconIncorrect} style={styles.icon} />
            <View style={styles.statTextContainer}>
              <Text style={styles.statNumber}>{incorrect}</Text>
              <Text style={styles.statLabel}>Incorrect</Text>
            </View>
          </View>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Image source={iconTotal} style={styles.icon} />
            <View style={styles.statTextContainer}>
              <Text style={styles.statNumber}>{total}</Text>
              <Text style={styles.statLabel}>Total</Text>
            </View>
          </View>
          <View style={styles.statBox}>
            <Image source={iconAttempted} style={styles.icon} />
            <View style={styles.statTextContainer}>
              <Text style={styles.statNumber}>{attempted}</Text>
              <Text style={styles.statLabel}>Attempted</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.footerText}>Try More Quizzes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.aboutButton} onPress={() => navigation.navigate('AboutScreen')}>
        <Text style={styles.aboutButtonText}>Know About Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0d3b66",
    padding: 20,
  },
  headline: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 70,
    color:"white",
  },
  card: {
    width: "90%",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    position: "relative",
  },
  emoji: {
    width: 100,
    height: 100,
    position: "absolute",
    top: -50,
  },
  status: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginTop: 50,
    marginBottom: 10,
  },
  score: {
    fontSize: 18,
    color: "#333",
    marginBottom: 5,
  },
  scoreValue: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  statBox: {
    flex: 1,

    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    display:"flex",
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "start",
    maxWidth: '45%',
  },
  icon: {
    width: 24,
    height: 24 ,
    marginBottom: 10,
  },
  statTextContainer: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  statLabel: {
    fontSize: 16,
    color: "#333",
  },
  footerText: {
    fontSize: 18,
    color: "white",
    textDecorationLine: "underline",
    marginTop: 20,
  },
  aboutButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#1e90ff",
    borderRadius: 5,
  },
  aboutButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ResultScreen;
