import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../constants/colors";

export default function StoryListItem({ item }) {
  return (
    <Pressable style={styles.container} onPress={item.onPress}>
      <Pressable
        onPress={item.onStoryPress}
        style={{
          width: 55,
          height: 55,
          borderRadius: 33,
          padding: 2,
          borderWidth: 3,
          borderColor: item.story ? colors.primary : "transparent",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={{ uri: item.imageUrl }}
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            borderRadius: 25,
          }}
        />
      </Pressable>
      <View style={styles.nameContainer}>
        <Text 
          style={styles.nameText} 
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {item.name}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: 90,
    alignItems: "center",
    marginEnd: 3,
    // borderBottomWidth: 1,
    gap: 2,
  },
  nameContainer: {
    width: "100%",
    alignItems: "center",
  },
  nameText: {
    fontSize: 13,
    textAlign: "center",
  },
});
