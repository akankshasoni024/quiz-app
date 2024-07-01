import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultScreen = ({
  score,
  correct,
  incorrect,
  total,
  attempted,
  status,
}) => {
  const getEmoji = () => {
    return score > 30
      ? require("../../assets/congratulations.png")
      : require("../../assets/ooops.png");
  };

  const iconCorrect = require("../../assets/correct.png"); // Update with your correct icon path
  const iconIncorrect = require("../../assets/incorrect.png"); // Update with your incorrect icon path
  const iconTotal = require("../../assets/total.png"); // Update with your total icon path
  const iconAttempted = require("../../assets/attempted.png"); // Update with your attempted icon path

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Quiz Summary</Text>
      <View style={styles.card}>
        <Image source={getEmoji()} style={styles.emoji} />
        <Text style={styles.status}>{status}</Text>
        <Text style={styles.score}>Your Score is</Text>
        <Text style={styles.scoreValue}>{score}%</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Image source={iconCorrect} style={styles.icon} />
            <View>
              <Text style={styles.statNumber}>{correct}</Text>
              <Text style={styles.statLabel}>Correct</Text>
            </View>
          </View>
          <View style={styles.statBox}>
            <Image source={iconIncorrect} style={styles.icon} />
            <View>
              <Text style={styles.statNumber}>{incorrect}</Text>
              <Text style={styles.statLabel}>Incorrect</Text>
            </View>
          </View>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Image source={iconTotal} style={styles.icon} />
            <View>
              <Text style={styles.statNumber}>{total}</Text>
              <Text style={styles.statLabel}>Total</Text>
            </View>
          </View>
          <View style={styles.statBox}>
            <Image source={iconAttempted} style={styles.icon} />
            <View>
              <Text style={styles.statNumber}>{attempted}</Text>
              <Text style={styles.statLabel}>Attempted</Text>
            </View>
            <View>
              <Text style={styles.failText}>
                {score < 30 && (
                  <Text style={styles.failText}>Let's study this topic and try again</Text>
                )}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.footerText}>Try More Quizzes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  headline: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
    padding: 30,
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
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  statBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    width: 140, // Set a fixed width
    height: 70, // Set a fixed height
  },
  failText:{backgroundColor:'pink',fontstyle:'underline'},
  icon: {
    width: 22,
    height: 24,
    marginRight: 10,
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
    color: "#fff",
    textDecorationLine: "underline",
    marginTop: 20,
  },
});

export default ResultScreen;
