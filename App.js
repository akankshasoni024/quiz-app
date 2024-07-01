import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import ResultScreen from "./src/screens/ResultScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      colors={["#003352", "#002338", "#000D1E", "#1D0C24"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <ResultScreen
          score={70}
          correct={7}
          incorrect={1}
          total={10}
          attempted={8}
          status="Congratulations!!!"
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
