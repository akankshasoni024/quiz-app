import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const HomeScreen = ({ navigation }) => {
  const categories = [
    {
      title: "Mathematics",
      image: require("../../assets/homeIcons/mathematics.png"),
      screen: "Question",
      subject: "Mathematics",
    },
    {
      title: "Science",
      image: require("../../assets/homeIcons/science.png"),
      screen: "Question",
      subject: "Science",
    },
    {
      title: "Computer",
      image: require("../../assets/homeIcons/computer.png"),
      screen: "Question",
      subject: "Computer Science",
    },
    {
      title: "General Knowledge",
      image: require("../../assets/homeIcons/general_knowledge.png"),
      screen: "Question",
      subject: "General Knowledge",
    },
    {
      title: "Sports",
      image: require("../../assets/homeIcons/sports.png"),
      screen: "Question",
      subject: "Sports",
    },
    {
      title: "Art and Literature",
      image: require("../../assets/homeIcons/art_and_literature.png"),
      screen: "Question",
      subject: "Art and Literature",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.userText}>Hi Vishwas</Text>
        <Text style={styles.rewardsText}>Rewards</Text>
      </View>
      <View style={styles.categories}>
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
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>Next</Text>
        </TouchableOpacity>
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
  rewardsText: {
    color: "#ffd700",
    fontSize: 18,
    fontWeight: "bold",
  },
  categories: {
    flex: 1,
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
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  footerText: {
    color: "white",
    fontSize: 18,
  },
});

export default HomeScreen;
