import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../constants/colors";

export default function MessageListItem({ item }) {
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
          alignItems: "center",
          justifyContent: "center",
          borderColor: item.story ? colors.primary : "transparent",
        }}
      >
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
      </Pressable>
      <View style={styles.innerContainer}>
        <View style={styles.innerContainerElement}>
          <Text>{item.name}</Text>
          <Text>{item.time}</Text>
        </View>

        <View style={styles.innerContainerElement}>
          <Text style={{ flex: 1 }} lineBreakMode="tail" numberOfLines={1}>
            {item.message}
          </Text>
          {item.unreadedNumber > 0 && (
            <View style={styles.unreadedNumber}>
              <Text style={styles.unreadedNumberText}>
                {item.unreadedNumber}
              </Text>
            </View>
          )}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    paddingHorizontal: 15,
    width: "100%",
    alignItems: "center",
    marginBottom: 3,
    backgroundColor: "rgba(0,0,0,0.04)",
    borderBottomColor: "lightgrey",
    gap: 10,
  },
  innerContainer: {
    alignItems: "flex-start",
    flex: 1,
    gap: 5,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  innerContainerElement: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 10,
  },
  unreadedNumber: {
    backgroundColor: colors.primary,
    height: 21,
    width: 21,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
    textAlign: "center",
    verticalAlign: "middle",
    borderRadius: 15,
  },
  unreadedNumberText: {
    color: "white",
    fontSize: 11,
  },
});
