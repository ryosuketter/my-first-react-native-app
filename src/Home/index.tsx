import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView, StyleSheet, View } from "react-native";
import axios from "axios";

type RootStackParamList = {
  Home: undefined;
  Detail: { id: number };
};

interface Post {
  id: number;
  title: string;
}

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

export const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigation = useNavigation<HomeScreenNavigationProp>();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <ScrollView>
      {posts.map((post) => (
        <ListItem
          key={post.id}
          bottomDivider
          onPress={() => navigation.navigate("Detail", { id: post.id })}
        >
          <ListItem.Content>
            <View style={styles.itemContainer}>
              <View>
                <Avatar
                  source={{ uri: "https://placehold.jp/150x150.png" }}
                  size="large"
                />
              </View>
              <View style={styles.textContainer}>
                <ListItem.Title>{post.title}</ListItem.Title>
              </View>
            </View>
          </ListItem.Content>
        </ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingEnd: 50,
  },
  textContainer: {
    marginLeft: 10,
  },
});
