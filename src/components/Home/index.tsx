import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlatList, Alert, View } from 'react-native';
import { RenderItem } from './renderItem';
import { Post, RootStackParamList } from '../../Types';
import { fetchPosts } from '../../lib/api';
import { Footer } from '../Footer';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const fetchAndSetPosts = async () => {
    try {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
    } catch (error) {
      Alert.alert('エラー', (error as Error)?.message || '記事の取得に失敗しました');
    }
  };

  useEffect(() => {
    fetchAndSetPosts();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchAndSetPosts().then(() => setRefreshing(false));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <RenderItem item={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
      <Footer />
    </View>
  );
};
