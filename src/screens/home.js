import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Messages from "../data/messages.json";
import MessageListItem from "../components/message-list-item";
import StoryListItem from "../components/story-list-item";

export default function HomeScreen() {
  const storiesArray = Messages.filter((message) => message.story);
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <Text style={styles.title}>Stories</Text>
            <View style={styles.storiesContainer}>
              <FlatList
                data={storiesArray}
                horizontal
                renderItem={({ item }) => <StoryListItem item={item} />}
                keyExtractor={(item) => item.id}
              />
            </View>
            <Text style={styles.title}>Messages</Text>
          </>
        )}
        data={Messages}
        renderItem={({ item }) => <MessageListItem item={item} />}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.author}>by younes ammari</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 15,
  },
  storiesContainer: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
  },
  author: {
    textAlign: "center",
    marginVertical: 10,
  },
});
