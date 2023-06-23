import React from "react";
import { ListItem, Image } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Post, RootStackParamList } from "../../Types";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type RenderItemProps = {
  item: Post;
  navigation: HomeScreenNavigationProp;
};

export const RenderItem = ({ item, navigation }: RenderItemProps) => (
  <ListItem
    key={item.id}
    bottomDivider
    onPress={() => navigation.navigate("Detail", { id: item.id })}
  >
    <ListItem.Content>
      <View style={styles.itemContainer}>
        <View>
          <Image
            source={{ uri: item.thumbnail.url }}
            style={{ width: 50, height: 50 }}
          />
        </View>
        <View style={styles.textContainer}>
          <ListItem.Title>{item.title}</ListItem.Title>
        </View>
      </View>
    </ListItem.Content>
  </ListItem>
);

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
