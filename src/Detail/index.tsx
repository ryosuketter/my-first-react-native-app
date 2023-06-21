import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import axios from "axios";
import { RouteProp } from "@react-navigation/native";
import { Text } from "react-native-elements";

interface Post {
  id: number;
  title: string;
  body: string;
}

type RootStackParamList = {
  Home: undefined;
  Detail: { id: number };
};

type PostScreenRouteProp = RouteProp<RootStackParamList, "Detail">;

interface PostScreenProps {
  route: PostScreenRouteProp;
}

export const Detail = ({ route }: PostScreenProps) => {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => console.error(error));
  }, [route.params.id]);

  if (!post) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <ScrollView>
        <View style={styles.titleWrapper}>
          <Text h1>{post.title}</Text>
        </View>
        <Text>{post.body}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  titleWrapper: {
    marginBottom: 20,
  },
});
