import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Alert, ActivityIndicator, Image } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { Text } from 'react-native-elements';
import { Post, RootStackParamList } from '../../Types';
import { fetchPostById } from '../../lib/api';
import { Footer } from '../Footer';

type PostScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

interface PostScreenProps {
  route: PostScreenRouteProp;
}

export const Detail = ({ route }: PostScreenProps) => {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchAndSetPost = async () => {
      try {
        const fetchedPost = await fetchPostById(route.params.id);
        setPost(fetchedPost);
      } catch (error) {
        Alert.alert('エラー', (error as Error)?.message || '記事の詳細の取得に失敗しました');
      }
    };
    fetchAndSetPost();
  }, [route.params.id]);

  if (!post) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ marginBottom: 60 }}>
        <Image source={{ uri: post.thumbnail.url }} style={{ width: '100%', height: 200 }} />
        <View style={styles.titleWrapper}>
          <Text h2>{post.title}</Text>
        </View>
        <Text style={styles.body}>{post.body}</Text>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  titleWrapper: {
    padding: 20,
  },
  body: {
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
